import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showDropdownMenu = false;

  onToggleDropdown(): void {
    this.showDropdownMenu = !this.showDropdownMenu;
  }
}
