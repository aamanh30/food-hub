import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { MainComponent } from './main/main.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { ActiveCategoryPipe } from './pipes/active-category.pipe';
import { VariationsMainComponent } from './variations-main/variations-main.component';
import { VariationFormComponent } from './variation-form/variation-form.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    MenuCardComponent,
    ActiveCategoryPipe,
    VariationsMainComponent,
    VariationFormComponent
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CatalogueModule {}
