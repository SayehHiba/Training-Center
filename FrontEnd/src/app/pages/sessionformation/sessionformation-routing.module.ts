import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from 'app/layouts';
import { CommonLayoutComponent } from 'app/layouts/common-layout';

import { AjoutersessionformationComponent } from './ajoutersessionformation/ajoutersessionformation.component';
import { SupprimersessionformationComponent } from './supprimersessionformation/supprimersessionformation.component';


@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          component: CommonLayoutComponent,
          children: [
            { path: 'ajoutersessionformation', component: AjoutersessionformationComponent , pathMatch: 'full' },
            { path: 'supprimersessionformation', component: SupprimersessionformationComponent , pathMatch: 'full'},
           
          ],
        },
      ]),
      LayoutsModule,
    ],
    exports: [RouterModule],
  })
  export class sessionformationRoutingModule { }
  