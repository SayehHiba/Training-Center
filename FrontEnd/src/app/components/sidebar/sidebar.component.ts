import { Component, Input } from '@angular/core';

import { SidebarComponent as BaseSidebarComponent } from 'theme/components/sidebar';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['../../../theme/components/sidebar/sidebar.component.scss', './sidebar.component.scss'],
  templateUrl: '../../../theme/components/sidebar/sidebar.component.html',
})

export class SidebarComponent extends BaseSidebarComponent {
  public title = 'darkboard';
  public menu = [
    { name: 'Dashboard', link: '/app/dashboard', icon: 'dashboard' },
    {
      name: 'Formation', icon: 'auto_stories', children: [
      { name: 'Ajouter', link: '/formation/ajouterFormation' },
      { name: 'Modifier', link: '/formation/modifierFormation' },
      { name: 'Supprimer', link: '/formation/supprimerFormation' },
      ],
    },
    {
      name: 'Centre', icon: 'maps_home_work', children: [
      { name: 'Ajouter', link: '/centre/ajouterCentre' },
      { name: 'Modifier', link: '/centre/modifierCentre' },
      { name: 'Supprimer', link: '/centre/supprimerCentre' },
      ],
    },
    {
      name: 'Session Formation', icon: 'queue', children: [
      { name: 'Ajouter', link: '/sessionformation/ajoutersessionformation' },
      { name: 'Supprimer', link: '/sessionformation/supprimersessionformation' },
      ],
    },
    {
      name: 'Domaine', icon: 'domain_verification', children: [
      { name: 'Ajouter', link: '/domaine/ajouterDomaine' },
      { name: 'Modifier', link: '/domaine/modifierDomaine' },
      { name: 'Supprimer', link: '/domaine/supprimerDomaine' },
      ],
    },
    {
      name: 'Formateurs', icon: 'recent_actors', children: [
      { name: 'Ajouter', link: '/formateurs/ajouterFormateurs' },
      { name: 'Modifier', link: '/formateurs/modifierFormateurs' },
      { name: 'Supprimer', link: '/formateurs/supprimerFormateurs' },
      ],
    },
  ];

  public menuUser = [
    { name: 'Dashboard', link: '/app/dashboard', icon: 'dashboard' },
    { name: 'Inscription', link: '/app/participant', icon: 'person_add' },
  ];
}
