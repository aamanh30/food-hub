import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageComponent } from './layouts/full-page/full-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FullPageComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [FullPageComponent],
})
export class SharedModule {}
