
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Domaine } from 'app/Acces/data/domaine';
import { DomaineService } from 'app/Acces/services/domaine.service';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';

@Component({
  selector: 'app-supprimer-domaine',
  templateUrl: './supprimer-domaine.component.html',
  styleUrls: ['./supprimer-domaine.component.scss']
})
export class SupprimerDomaineComponent implements OnInit {

authRequest:any;
affiche=false;
token=localStorage.getItem("token");
domaines!:Domaine[];//initialisation
displayedColumns: string[] = ["libelle","id"]
public dataSource = new MatTableDataSource<Domaine>();
  constructor(private jwtService:JwtClientService, private route: ActivatedRoute, private domainesService: DomaineService) { 
    
      
      console.log(localStorage.getItem("token"));
      this.domainesService.getAllDomaine(this.token).subscribe(
       data=>{
      this.domaines=JSON.parse(data);
      console.log(this.domaines);
      this.dataSource.data=this.domaines;
      
      }
       );
      

  }

  del(id:number){
    console.log("delet");
    if(confirm("Are you sure to delete Ce domaine  ")){
    this.domainesService.deleteDomaine(localStorage.getItem("token"),id).subscribe((result)=>{
     alert("Data is deleted succesfully !");
     window.location.reload();

    },
    error => {
      console.log(error);
      this.affiche=true;
    }
    );}
  }
 
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngOnInit(): void {
    
  }
  

}
