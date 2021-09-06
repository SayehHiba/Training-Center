import { Component, HostBinding,OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/Acces';
import { Formation } from 'app/Acces/data/formation';
import { SessionFormation } from 'app/Acces/data/session-formation';
import { Utilisateur } from 'app/Acces/data/utilisateur';
import { FormationService } from 'app/Acces/services/formation.service';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';
import { SessionService } from 'app/Acces/services/session-formation.service';
import { utilisateurService } from 'app/Acces/services/utilisateur.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {
  
 formations!:Formation[];



 sessionformations!:SessionFormation[];
  
 
 // @HostBinding('class.projects-table') public readonly projectsTable = true;

  public displayedColumns: string[] = [
  "formateur",

  "organisme",
  'lieu',
  'nb_participants',
  'date_debut',
  'date_fin',
  'id'



  ];
  dataSource : MatTableDataSource<SessionFormation>;
  public user:Utilisateur;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private jwtService:JwtClientService, private route: ActivatedRoute, private sessionFormationService: SessionService, 
    private FormationService: FormationService,private authService: AuthService,private utilisateurService:utilisateurService
   ){

    this.authService.userData.subscribe(Utilisateur =>  {
      this.user=Utilisateur;
      console.log(this.user);
      });
     
      console.log(this.token);
      
      this.sessionFormationService.getAllSessionFormations(this.token).subscribe(
        data=>{
       this.sessionformations=JSON.parse(data);
       console.log(this.sessionformations);
       this.dataSource=new MatTableDataSource(this.sessionformations);
       //console.log(this.sessionformations[1].formations[1].titre);
       },
      error => {
        console.log(error);
      }
      );



/*
      this.formationService.getAllFormation(this.gettoken.token).subscribe(
      data=>{
     this.formations=JSON.parse(data);
     console.log(this.formations);
    
     
     }
      );*/
      
    

  }
  
  ngOnInit(): void {


    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  


  
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  

  card:boolean=false;
  sessionCourante:SessionFormation
  affichercardSession(id){
    
     console.log("id courant"+id);
     this.sessionCourante=this.sessionformations.filter(o=>o.id==id)[0];
    let existe=this.user.sessions.filter(o=>o.id==this.sessionCourante.id);
  /*  if(existe!=null){

      this.affiche=true;
      return;

    }*/
     console.log(this.sessionCourante);
     this.card=true;
  }
  SessionFormationUser:SessionFormation[]=[];
  affiche=false;
  token=localStorage.getItem("token");
  ajouter(){
    
    console.log("add");
    
    if(this.user.sessions!==null){
      this.SessionFormationUser=JSON.parse(localStorage.getItem("session"));
  
    }else{
      
      //this.SessionFormationUser=new SessionFormation()[]
    }
    let n=this.user._idUser
    console.log(this.user);
      this.user.sessions.push(this.sessionCourante);
    console.log(this.user);
  this.utilisateurService.updateUser(this.token,this.user).subscribe(
    data => {
      console.log(data);
     
     
     this.user=JSON.parse(data);
     localStorage.setItem("session",JSON.stringify(this.user.sessions));
    /* this.utilisateurService.deleteUser(this.token,n).subscribe(
      data=>    {localStorage.setItem("session",JSON.stringify(this.user.sessions));
      localStorage.setItem("id",n.toString());
     } 
        );
     */
    }
    ,
      error =>{
      console.log(error);
     
    }
  );
    this.card=false;

  }




  
  /*
  public data: object[] = [
    {
      project: 'Darkboard',
      responsible: [
        {
          color: 'color--light-blue',
          name: 'Alex',
        },
        {
          color: 'background-color--primary',
          name: 'Dina',
        },
        {
          color: 'color--orange',
          name: 'Misha',
        },
      ],
      email: 'Luke@skywalker.com',
      deadline: 'Jun 15',
      progress: 44,
      isSelected: false,
    },
    {
      project: 'Big financial app',
      responsible: [
        {
          color: 'color--orange',
          name: 'Vlada',
        },
      ],
      email: 'Boss@financial.com',
      deadline: 'Mar 1',
      progress: 14,
      isSelected: true,
    },
    {
      project: 'New Year office decoration',
      responsible: [
        {
          color: 'background-color--primary',
          name: 'Dina',
        },
        {
          color: 'color--orange',
          name: 'Vlada',
        },
      ],
      email: 'info@creativeit.io',
      deadline: 'Dec 25',
      progress: 100,
      isSelected: false,
    },
    {
      project: 'Don\'t worry, be happy!!!',
      responsible: [
        {
          color: 'background-color--secondary',
          name: 'Everybody',
        },
      ],
      email: 'Contact@happyness.com',
      deadline: 'Yesterday',
      progress: 31,
      isSelected: false,
    },
  ];*/

}
