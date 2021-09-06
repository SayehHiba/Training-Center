import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'app/Acces/data/formation';
import { FormationService } from 'app/Acces/services/formation.service';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';


@Component({
  selector: 'app-supprimer-formation',
  templateUrl: './supprimer-formation.component.html',
  styleUrls: ['./supprimer-formation.component.scss']
})
export class SupprimerFormationComponent implements OnInit {

  authRequest:any;
  affiche=false;
	token=localStorage.getItem("token");
formation!:Formation[];//initialisation
displayedColumns: string[] = ["titre","duree","nb_session","type_formation","domaine","budget","id"];
dataSource = new MatTableDataSource<Formation>();
  constructor(private jwtService:JwtClientService, private route: ActivatedRoute, private formationService: FormationService) { 
    
       console.log(localStorage.getItem("token"));
       this.formationService.getAllFormation(this.token).subscribe(
       data=>{
      this.formation=JSON.parse(data);
      console.log(this.formation);
      this.dataSource.data=this.formation;
      
      }
       );
       
     


  }

  del(id:number){
    console.log("delet");
    if(confirm("Are you sure to delete Cette formation "))
    this.formationService.deleteFormation(localStorage.getItem("token"),id).subscribe((result)=>{
      console.log("Data is deleted succesfully !", result);
      window.location.reload();

    },
    error => {
      console.log(error);
      this.affiche=true;
    }
    );
  }
  ngOnInit(): void {
    
  }
  
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}


