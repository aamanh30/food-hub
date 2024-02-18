import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuCategory, MenuItem, menuItems } from '../../../shared/models';
import { MenuItemService } from './menu-item.service';
import { EMPTY, Observable, map } from 'rxjs';
import { CartItemsService } from '../../cart/cart-main/cart-items.service';
import { LinkRendererComponent } from 'src/app/shared/link-renderer/link-renderer.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  activeCategory$: Observable<MenuCategory | undefined> = EMPTY;
  readonly menuItems = menuItems;
  constructor(
    private readonly router: Router,
    private readonly snackBar: MatSnackBar,
    private readonly menuItemService: MenuItemService,
    private readonly cartItemsService: CartItemsService
  ) {
    this.activeCategory$ = this.menuItemService.getActiveCategory();
  }

  onMenuItemSelected(menuItem: MenuItem): void {
    if (menuItem.isCustomizable) {
      this.router.navigate([`/catalogue/${menuItem.category}/${menuItem.id}`]);
      return;
    }

    this.cartItemsService.updateCartItems(menuItem);
    this.snackBar.openFromComponent(LinkRendererComponent, {
      data: {
        message: 'Menu item added successfully to cart',
        routerLink: '/cart',
        linkText: 'View Cart'
      }
    });
  }

  isAddedToCart(id: number) {
    return this.cartItemsService
      .getCartItems()
      .pipe(map(cartItems => cartItems.some(cartItem => cartItem.id === id)));
  }
}
