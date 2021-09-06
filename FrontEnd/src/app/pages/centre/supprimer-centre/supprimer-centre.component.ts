import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Formateur } from 'app/Acces/data/formateur';
import { Organisme } from 'app/Acces/data/organisme';
import { FormateurService } from 'app/Acces/services/formateur.service';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';
import { OrganismeService } from 'app/Acces/services/organisme.service';


@Component({
  selector: 'app-supprimer-centre',
  templateUrl: './supprimer-centre.component.html',
  styleUrls: ['./supprimer-centre.component.scss']
})
export class SupprimerCentreComponent implements OnInit {
  authRequest:any;
  affiche=false;
    token=localStorage.getItem("token");
organismes!:Organisme[];//initialisation
displayedColumns: string[] = ["libelle","idOrganisme"];
public dataSource = new MatTableDataSource<Organisme>();
  constructor(private jwtService:JwtClientService, private route: ActivatedRoute, private organismeService: OrganismeService) { 

      
       this.organismeService.getAllOrganisme(this.token).subscribe(
       data=>{
      this.organismes=JSON.parse(data);
      console.log(this.organismes);
      this.dataSource.data=this.organismes;
      
      }
       );
       
    
  



  }
  del(id:number){
    console.log("delet");
    if(confirm("Are you sure to delete cet organisme ? ")){
    this.organismeService.deleteOrganisme(localStorage.getItem("token"),id).subscribe((result)=>{
      console.log("Data is deleted succesfully !", result);
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




