import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItemDetailsService } from './menu-item-details.service';
import { EMPTY, Observable, take, tap } from 'rxjs';
import {
  AddOn,
  Customization,
  CustomizedMenuItem,
  MenuCategory
} from '../../../shared/models';
import {
  AbstractControl,
  FormBuilder,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { CartItemsService } from '../../cart/cart-main/cart-items.service';
import { LinkRendererComponent } from 'src/app/shared/link-renderer/link-renderer.component';

@Component({
  selector: 'app-variations-main',
  templateUrl: './variations-main.component.html',
  styleUrls: ['./variations-main.component.scss']
})
export class VariationsMainComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper | undefined;
  menuItem$: Observable<CustomizedMenuItem | undefined> = EMPTY;
  form = new UntypedFormGroup({});
  selectedVariation: Customization | undefined;

  constructor(
    private readonly menuItemDetailsService: MenuItemDetailsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly snackBar: MatSnackBar,
    private readonly cartItemsService: CartItemsService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      customizations: this.fb.array([]),
      addOns: this.fb.array([]),
      totalQuantity: this.fb.control(1, [Validators.required])
    });

    const id = this.route.snapshot.params['id'];
    if (!id) {
      return;
    }
    this.menuItem$ = this.menuItemDetailsService.fetchMenuItemDetails(id).pipe(
      tap(menuItem => {
        if (menuItem) {
          this.form.setControl(
            'customizations',
            this.fb.array(
              menuItem.customizations.map(customization =>
                this.fb.group({
                  price: [customization.price],
                  quantity: [customization.quantity],
                  selected: [customization.selected],
                  title: [customization.title]
                })
              ),
              (group: AbstractControl) => {
                const isValid =
                  group.value.length &&
                  group.value.some(
                    (customization: Customization) => customization.selected
                  );
                return !isValid
                  ? {
                      required: true
                    }
                  : null;
              }
            )
          );

          this.form.setControl(
            'addOns',
            this.fb.array(
              menuItem.addOns.map(addOn =>
                this.fb.group({
                  id: [addOn.id],
                  title: [addOn.title],
                  price: [addOn.price],
                  category: [addOn.category],
                  isBestSeller: [addOn.isBestSeller],
                  rating: [addOn.rating],
                  image: [addOn.image],
                  isCustomizable: [addOn.isCustomizable],
                  selected: [addOn.selected]
                })
              ),
              (group: AbstractControl) => {
                const addOnsSelected =
                  group.value.filter(({ selected }: AddOn) => selected) ?? [];
                if (addOnsSelected.length <= menuItem.maxAddOn) {
                  return null;
                }

                this.openSnackBar(
                  'You have reached the maximum limit of addons for this item.',
                  'Error'
                );
                return {
                  maxAddOns: true
                };
              }
            )
          );

          return;
        }
        this.router.navigate(['/catalogue']);
      })
    );
  }

  onBack(category: MenuCategory) {
    this.router.navigate([`/catalogue/${category}`]);
  }

  onPrevious() {}

  openSnackBar(
    message: string,
    action: string,
    config: MatSnackBarConfig = { duration: 2000 }
  ) {
    this.snackBar.open(message, action, config);
  }

  onAddItem(menuItem: Partial<CustomizedMenuItem>): void {
    this.cartItemsService.updateCartItems(menuItem);
    this.snackBar.openFromComponent(LinkRendererComponent, {
      data: {
        message: 'Menu item added successfully to cart',
        routerLink: '/cart',
        linkText: 'View Cart'
      }
    });
    this.router.navigate([`/catalogue/${menuItem.category}`]);
  }

  onVariationSelected(): void {
    const { value } = this.form.controls['customizations'];
    this.selectedVariation = Array.isArray(value)
      ? value.find(customization => customization.selected)
      : undefined;
  }

  onTotalQuantityChanged(totalQuantity: number): void {
    if (totalQuantity > 0) {
      this.form.patchValue({ totalQuantity });
      return;
    }

    this.menuItem$
      .pipe(take(1))
      .subscribe(menuItem =>
        this.router.navigate([`/catalogue/${menuItem?.category}`])
      );
  }
}
