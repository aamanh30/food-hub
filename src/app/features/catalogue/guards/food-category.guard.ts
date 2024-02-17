import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MenuCategory } from '../../../shared/models';
import { MenuItemService } from '../main/menu-item.service';

const validFoodCategorySet = new Set<MenuCategory | null>([
  MenuCategory.Chinese,
  MenuCategory.Kosher,
  MenuCategory.NonVegetarian,
  MenuCategory.Vegetarian
]);

export const foodCategoryGuard: CanActivateFn = route => {
  inject(MenuItemService).updateActiveCategory(route.params['category']);
  if (!validFoodCategorySet.has(route.params['category'])) {
    inject(Router).navigate(['error']);

    return false;
  }
  if (route.data['checkId']) {
    return !!route.params['id'];
  }

  return true;
};
