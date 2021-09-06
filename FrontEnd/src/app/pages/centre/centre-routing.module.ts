import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from 'app/layouts';
import { CommonLayoutComponent } from 'app/layouts/common-layout';
import { AjouterCentreComponent } from './ajouter-centre/ajouter-centre.component';
import { ModifierCentreComponent } from './modifier-centre/modifier-centre.component';
import { SupprimerCentreComponent } from './supprimer-centre/supprimer-centre.component';

@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          component: CommonLayoutComponent,
          children: [
            { path: 'ajouterCentre', component: AjouterCentreComponent, pathMatch: 'full' },
            { path: 'modifierCentre', component: ModifierCentreComponent, pathMatch: 'full' },
            { path: 'supprimerCentre', component: SupprimerCentreComponent, pathMatch: 'full' },
           
          ],
        },
      ]),
      LayoutsModule,
    ],
    exports: [RouterModule],
  })
  export class CentreRoutingModule { }
  