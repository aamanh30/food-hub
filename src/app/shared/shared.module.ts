import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageComponent } from './layouts/full-page/full-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormGroupPipe } from './pipes/form-group.pipe';
import { FormArrayPipe } from './pipes/form-array.pipe';
import { LinkRendererComponent } from './link-renderer/link-renderer.component';
import { FormControlPipe } from './pipes/form-control.pipe';

@NgModule({
  declarations: [
    FullPageComponent,
    HeaderComponent,
    FooterComponent,
    LinkRendererComponent,
    FormGroupPipe,
    FormArrayPipe,
    FormControlPipe
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    FullPageComponent,
    LinkRendererComponent,
    FormGroupPipe,
    FormArrayPipe,
    FormControlPipe
  ]
})
export class SharedModule {}
