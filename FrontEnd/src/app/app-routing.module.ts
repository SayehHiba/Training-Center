import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutsModule } from './layouts';
import { CommonLayoutComponent } from './layouts/common-layout';
import { ChartsComponent } from './pages/charts';
import { DashboardComponent } from './pages/dashboard';
import { ParticipantComponent } from './pages/participant/participant.component';

// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'pages/login', pathMatch: 'full' },
        { path: 'app', component: CommonLayoutComponent, children: [
          { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
          { path: 'charts', component: ChartsComponent, pathMatch: 'full' },
          { path: 'participant', component: ParticipantComponent, pathMatch: 'full' },
          

          { path: '**', redirectTo: '/ypages/404' },
        ] }, // add 'canActivate: AuthGuard' for catching unauth users
        { path: 'pages', loadChildren: () => import('./pages/pages/pages.module').then(m => m.PagesModule) },
        { path: 'formation', loadChildren: () => import('./pages/formation/formation.module').then(m=> m.FormationModule)},
        { path: 'formateurs', loadChildren: () => import('./pages/formateurs/formateurs.module').then(m=> m.FormateursModule)},
        { path: 'centre', loadChildren: () => import('./pages/centre/centre.module').then(m=> m.CentreModule)},
        { path: 'domaine', loadChildren: () => import('./pages/domaine/domaine.module').then(m=> m.DomaineModule)},
        { path: 'sessionformation', loadChildren: () => import('./pages/sessionformation/sessionformation.module').then(m=> m.sessionformationModule)},
        { path: '**', redirectTo: '/pages/404' },
      ],
      { useHash: true },
    ),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
