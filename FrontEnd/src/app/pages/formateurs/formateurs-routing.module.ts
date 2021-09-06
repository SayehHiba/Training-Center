import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from 'app/layouts';
import { CommonLayoutComponent } from 'app/layouts/common-layout';
import { AjouterFormateursComponent } from './ajouter-formateurs/ajouter-formateurs.component';
import { ModifierFormateursComponent } from './modifier-formateurs/modifier-formateurs.component';
import { SupprimerFormateursComponent } from './supprimer-formateurs/supprimer-formateurs.component';

@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          component: CommonLayoutComponent,
          children: [
            { path: 'ajouterFormateurs', component: AjouterFormateursComponent, pathMatch: 'full' },
            { path: 'modifierFormateurs', component: ModifierFormateursComponent, pathMatch: 'full' },
            { path: 'supprimerFormateurs', component: SupprimerFormateursComponent, pathMatch: 'full' },
           
          ],
        },
      ]),
      LayoutsModule,
    ],
    exports: [RouterModule],
  })
  export class FormateursRoutingModule { }