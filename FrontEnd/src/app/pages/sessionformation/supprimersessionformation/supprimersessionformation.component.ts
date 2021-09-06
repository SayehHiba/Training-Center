import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SessionService} from 'app/Acces/services/session-formation.service';
import { SessionFormation } from 'app/Acces/data/session-formation';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-supprimersessionformation',
  templateUrl: './supprimersessionformation.component.html',
  styleUrls: ['./supprimersessionformation.component.scss']
})
export class SupprimersessionformationComponent implements OnInit {

  affiche=false;

	token=localStorage.getItem("token");
SessionFormation!:SessionFormation[];//initialisation
displayedColumns: string[] = [ "date_debut","date_fin","lieu","nb_participants","formateur","organisme","id"];
dataSource = new MatTableDataSource<SessionFormation>();

  constructor(private jwtService:JwtClientService, private route: ActivatedRoute, private sessionService : SessionService) { 
 
    console.log(localStorage.getItem("token"));
       this.sessionService.getAllSessionFormations(this.token).subscribe(
       data=>{
      this.SessionFormation=JSON.parse(data);
      console.log(this.SessionFormation);
      this.dataSource.data=this.SessionFormation;
      
      }
       );
      
  



  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  ngOnInit(): void {
    
  }
  del(id:number){
    console.log("delet");
    if(confirm("Are you sure to delete Cette formation ")){
    this.sessionService.deleteSessionFormation(localStorage.getItem("token"),id).subscribe((result)=>{
      console.log("Data is deleted succesfully !", result);
      window.location.reload();

    },
    error => {
      console.log(error);
      this.affiche=true;
    }
    );}
  }

}
