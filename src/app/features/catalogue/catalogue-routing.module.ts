import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { foodCategoryGuard } from './guards/food-category.guard';
import { MenuCategory } from '../../shared/models';
import { VariationsMainComponent } from './variations-main/variations-main.component';

const routes: Routes = [
  {
    path: ':category',
    canActivate: [foodCategoryGuard],
    data: {
      checkId: false
    },
    component: MainComponent
  },
  {
    path: ':category/:id',
    canActivate: [foodCategoryGuard],
    data: {
      checkId: true
    },
    component: VariationsMainComponent
  },
  {
    path: '',
    redirectTo: MenuCategory.Vegetarian,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule {}
