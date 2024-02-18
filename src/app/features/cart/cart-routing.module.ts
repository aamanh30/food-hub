import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartMainComponent } from './cart-main/cart-main.component';

const routes: Routes = [
  {
    path: '',
    component: CartMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}
