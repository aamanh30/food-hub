import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageComponent } from './layouts/full-page/full-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormGroupPipe } from './pipes/form-group.pipe';
import { FormArrayPipe } from './pipes/form-array.pipe';

@NgModule({
  declarations: [
    FullPageComponent,
    HeaderComponent,
    FooterComponent,
    FormGroupPipe,
    FormArrayPipe
  ],
  imports: [CommonModule, RouterModule],
  exports: [FullPageComponent, FormGroupPipe, FormArrayPipe]
})
export class SharedModule {}
