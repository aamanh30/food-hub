import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CustomizedMenuItem } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  #cartItems: BehaviorSubject<Partial<CustomizedMenuItem>[]> =
    new BehaviorSubject<Partial<CustomizedMenuItem>[]>([]);

  getCartItems(): Observable<Partial<CustomizedMenuItem>[]> {
    return this.#cartItems.asObservable();
  }

  updateCartItems(cartItem: Partial<CustomizedMenuItem>): void {
    const items = this.#cartItems.getValue().concat([cartItem]);
    this.#cartItems.next(items);
  }
}
