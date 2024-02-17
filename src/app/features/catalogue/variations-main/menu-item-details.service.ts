import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CustomizedMenuItem,
  MenuQuantity,
  menuItems
} from '../../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class MenuItemDetailsService {
  fetchMenuItemDetails(id: number): Observable<CustomizedMenuItem | undefined> {
    const menuItem = menuItems.find(menuItem => menuItem.id === Number(id));
    if (!menuItem) {
      return of(undefined);
    }

    return of({
      ...menuItem,
      maxAddOn: Math.floor(Math.random() * 3 + 1),
      customizations: [
        {
          title: menuItem.title,
          price: menuItem.price,
          quantity: MenuQuantity.Quarter,
          selected: false
        },
        {
          title: menuItem.title,
          price: 1.75 * menuItem.price,
          quantity: MenuQuantity.Half,
          selected: false
        },
        {
          title: menuItem.title,
          price: 3.5 * menuItem.price,
          quantity: MenuQuantity.Full,
          selected: false
        }
      ],
      addOns: [
        {
          id: 10001,
          title: 'Sprite Can 330ML',
          price: 50,
          category: undefined,
          isBestSeller: false,
          rating: undefined,
          image: undefined,
          isCustomizable: false,
          selected: false
        },
        {
          id: 10002,
          title: 'Coca Cola 745ML',
          price: 80,
          category: undefined,
          isBestSeller: false,
          rating: undefined,
          image: undefined,
          isCustomizable: false,
          selected: false
        },
        {
          id: 10003,
          title: 'Thumbs Up Can 330ML',
          price: 60,
          category: undefined,
          isBestSeller: false,
          rating: undefined,
          image: undefined,
          isCustomizable: false,
          selected: false
        },
        {
          id: 10004,
          title: 'Coca Cola Can 330ML',
          price: 70,
          category: undefined,
          isBestSeller: false,
          rating: undefined,
          image: undefined,
          isCustomizable: false,
          selected: false
        },
        {
          id: 10004,
          title: 'Limca Can 330ML',
          price: 60,
          category: undefined,
          isBestSeller: false,
          rating: undefined,
          image: undefined,
          isCustomizable: false,
          selected: false
        },
        {
          id: 10005,
          title: 'Fanta Can 330ML',
          price: 50,
          category: undefined,
          isBestSeller: false,
          rating: undefined,
          image: undefined,
          isCustomizable: false,
          selected: false
        }
      ]
    });
  }
}
