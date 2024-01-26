import { Component } from '@angular/core';
import { tiles } from './tile.aux';
import { instructions } from './instruction.aux';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  readonly tiles = tiles;
  readonly instructions = instructions;
}
