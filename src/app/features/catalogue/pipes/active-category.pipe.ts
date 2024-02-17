import { Pipe, PipeTransform } from '@angular/core';
import { MenuCategory, MenuItem } from '../../../shared/models';

@Pipe({
  name: 'activeCategory'
})
export class ActiveCategoryPipe implements PipeTransform {
  transform(items: MenuItem[], category: MenuCategory | unknown): MenuItem[] {
    if (!category) {
      return [];
    }

    return items.filter(item => item.category === category);
  }
}
