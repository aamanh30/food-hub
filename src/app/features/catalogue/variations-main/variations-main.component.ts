import { Component, OnInit } from '@angular/core';
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
  ValidationErrors
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-variations-main',
  templateUrl: './variations-main.component.html',
  styleUrls: ['./variations-main.component.scss']
})
export class VariationsMainComponent implements OnInit {
  menuItem$: Observable<CustomizedMenuItem | undefined> = EMPTY;
  form = new UntypedFormGroup({});

  constructor(
    private readonly menuItemDetailsService: MenuItemDetailsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      customizations: this.fb.array([]),
      addOns: this.fb.array([])
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
                  `Max allowed add ons crossed! Max allowed is ${menuItem.maxAddOn}`,
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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  onAddItem({ customizations, addOns }: Partial<CustomizedMenuItem>): void {
    this.router.navigate(['/cart']);
  }
}
