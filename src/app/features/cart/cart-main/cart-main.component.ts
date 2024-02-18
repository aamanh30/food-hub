import { Component, OnInit } from '@angular/core';
import { CartItemsService } from './cart-items.service';
import { EMPTY, Observable, map, tap } from 'rxjs';
import { CustomizedMenuItem } from '../../../shared/models';

@Component({
  selector: 'app-cart-main',
  templateUrl: './cart-main.component.html',
  styleUrls: ['./cart-main.component.scss']
})
export class CartMainComponent implements OnInit {
  cartItems$: Observable<Partial<CustomizedMenuItem>[]> = EMPTY;
  cartTotal$: Observable<number> = EMPTY;
  constructor(private readonly cartItemsService: CartItemsService) {}

  ngOnInit(): void {
    this.cartItems$ = this.cartItemsService.getCartItems();
    this.cartTotal$ = this.cartItems$.pipe(
      map(cartItems => {
        const originalItemsTotal = cartItems
          .filter(cartItem => !cartItem.isCustomizable)
          .map(cartItems => cartItems.price)
          .reduce((total: number, price) => total + (price ?? 0), 0);
        const customizedItemsTotal = cartItems
          .filter(cartItem => cartItem.isCustomizable)
          .map(cartItems => {
            const customizationTotal = cartItems.customizations?.find(
              customization => customization.selected
            );
            const addOnTotal = (cartItems.addOns ?? [])
              .filter(addOns => addOns.selected)
              .map(addOns => addOns.price)
              .reduce((total: number, price) => total + (price ?? 0), 0);
            return (customizationTotal?.price ?? 0) + addOnTotal;
          })
          .reduce((total: number, price) => total + (price ?? 0), 0);

        return originalItemsTotal + customizedItemsTotal;
      })
    );
  }
}
