import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from 'app/layouts';
import { CommonLayoutComponent } from 'app/layouts/common-layout';
import { AjouterFormationComponent } from './ajouter-formation/ajouter-formation.component';
import { ModifierFormationComponent } from './modifier-formation/modifier-formation.component';
import { SupprimerFormationComponent } from './supprimer-formation/supprimer-formation.component';

@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          component: CommonLayoutComponent,
          children: [
            { path: 'ajouterFormation', component: AjouterFormationComponent, pathMatch: 'full' },
            { path: 'modifierFormation', component: ModifierFormationComponent, pathMatch: 'full' },
            { path: 'supprimerFormation', component: SupprimerFormationComponent, pathMatch: 'full' },
           
          ],
        },
      ]),
      LayoutsModule,
    ],
    exports: [RouterModule],
  })
  export class FormationRoutingModule { }
  