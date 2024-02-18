import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-link-renderer',
  templateUrl: './link-renderer.component.html',
  styleUrls: ['./link-renderer.component.scss']
})
export class LinkRendererComponent {
  @Output() linkClick = new EventEmitter<void>();

  constructor(
    public snackBarRef: MatSnackBarRef<LinkRendererComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}

  onClick(): void {
    this.snackBarRef.dismiss();
    this.linkClick.emit();
  }
}
