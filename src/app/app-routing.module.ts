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
          ),
      },
      {
        path: 'error',
        loadChildren: () =>
          import('./features/error/error.module').then(
            ({ ErrorModule }) => ErrorModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
