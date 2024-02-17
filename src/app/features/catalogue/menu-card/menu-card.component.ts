import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../../../shared/models';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent {
  @Output() menuItemSelected = new EventEmitter<MenuItem>();
  @Input() menuItem: MenuItem | undefined;

  onAdd(menuItem: MenuItem): void {
    this.menuItemSelected.emit(menuItem);
  }
}
