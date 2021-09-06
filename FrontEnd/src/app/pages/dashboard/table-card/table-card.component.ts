import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-table-card',
  styleUrls: ['./table-card.component.scss'],
  templateUrl: './table-card.component.html',
})
export class TableCardComponent {
  @HostBinding('class.projects-table') public readonly projectsTable = true;

  public tableHeader: string[] = [
    'Métier',
    'Compétences',
    'Formations à suivre',
    'Salaire moyen',
    'Offres dans le marché',
  ];
  public data: object[] = [
    {
      project: 'Devenir Data Scientist ',
      responsible: [
        {
          color: 'color--light-blue',
          name: 'Statistiques',
        },
        {
          color: 'background-color--primary',
          name: 'Algorithmique',
        },
        {
          color: 'color--orange',
          name: 'Analyse',
        },
      ],
      email: 'Python,R,Machine Learning',
      deadline: '3000 € - 3500 € ',
      progress: 65,
     
    },
    {
      project: 'Devenir un chef de projet',
      responsible: [
        {
          color: 'color--orange',
          name: 'Leadership',
        },
      ],
      email: 'Créativité, Innovation',
      deadline: '2500€ - 3000€',
      progress: 30,
     
    },
    {
      project: 'Devenir Consultant IT',
      responsible: [
        {
          color: 'background-color--primary',
          name: 'Rigueur',
        },
        {
          color: 'color--orange',
          name: 'Organisation',
        },
      ],
      email: 'Innovations technologiques',
      deadline: '2500€ - 5000€',
      progress: 60,
    
    },
    {
      project: 'Devenir Architecte Big Data',
      responsible: [
        {
          color: 'background-color--secondary',
          name: 'Data Architecture',
        },
      ],
      email: 'Hadoop, Spark, NoSQL',
      deadline: 'à partir de 3000 €',
      progress: 31,
     
    },
  ];
}
