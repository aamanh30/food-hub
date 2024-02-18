import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartMainComponent } from './cart-main/cart-main.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CartMainComponent],
  imports: [CommonModule, CartRoutingModule, MatCardModule]
})
export class CartModule {}
