import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullPageComponent } from './shared/layouts/full-page/full-page.component';

const routes: Routes = [
  {
    path: '',
    component: FullPageComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.module').then(
            ({ HomeModule }) => HomeModule
          )
      },
      {
        path: 'error',
        loadChildren: () =>
          import('./features/error/error.module').then(
            ({ ErrorModule }) => ErrorModule
          )
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./features/cart/cart.module').then(
            ({ CartModule }) => CartModule
          )
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./features/auth/auth.module').then(
            ({ AuthModule }) => AuthModule
          )
      },
      {
        path: 'catalogue',
        loadChildren: () =>
          import('./features/catalogue/catalogue.module').then(
            ({ CatalogueModule }) => CatalogueModule
          )
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
