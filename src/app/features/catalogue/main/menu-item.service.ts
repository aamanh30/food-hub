import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuCategory } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  #activeCategory = new BehaviorSubject<MenuCategory | undefined>(undefined);

  constructor() {}

  getActiveCategory() {
    return this.#activeCategory.asObservable();
  }

  updateActiveCategory(category: MenuCategory) {
    this.#activeCategory.next(category);
  }
}
