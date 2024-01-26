import { Component } from '@angular/core';
import { tiles } from './tile.aux';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly tiles = tiles;
}
