import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuCategory, MenuItem, menuItems } from '../../../shared/models';
import { MenuItemService } from './menu-item.service';
import { EMPTY, Observable } from 'rxjs';

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
    private readonly menuItemService: MenuItemService
  ) {
    this.activeCategory$ = this.menuItemService.getActiveCategory();
  }

  onMenuItemSelected({ category, id, isCustomizable }: MenuItem): void {
    const url = isCustomizable ? `/catalogue/${category}/${id}` : '/cart';
    this.router.navigate([url]);
  }
}
