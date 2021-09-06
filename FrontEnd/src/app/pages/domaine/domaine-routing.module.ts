import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from 'app/layouts';
import { CommonLayoutComponent } from 'app/layouts/common-layout';
import { AjouterDomaineComponent } from './ajouter-domaine/ajouter-domaine.component';
import { ModifierDomaineComponent } from './modifier-domaine/modifier-domaine.component';
import { SupprimerDomaineComponent } from './supprimer-domaine/supprimer-domaine.component';


@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          component: CommonLayoutComponent,
          children: [
            { path: 'ajouterDomaine', component: AjouterDomaineComponent , pathMatch: 'full' },
            { path: 'modifierDomaine', component: ModifierDomaineComponent, pathMatch: 'full' },
            { path: 'supprimerDomaine', component: SupprimerDomaineComponent, pathMatch: 'full' },
           
          ],
        },
      ]),
      LayoutsModule,
    ],
    exports: [RouterModule],
  })
  export class DomaineRoutingModule { }
  