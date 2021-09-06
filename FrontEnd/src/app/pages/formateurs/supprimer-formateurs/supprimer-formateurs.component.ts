import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Formateur } from 'app/Acces/data/formateur';
import { FormateurService } from 'app/Acces/services/formateur.service';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';


@Component({
  selector: 'app-supprimer-formateurs',
  templateUrl: './supprimer-formateurs.component.html',
  styleUrls: ['./supprimer-formateurs.component.scss']
})
export class SupprimerFormateursComponent implements OnInit {

  authRequest:any;
  affiche=false;
	token=localStorage.getItem("token");
formateurs!:Formateur[];//initialisation
displayedColumns: string[] = ["nom","prenom","tel","type","email","idFormateur"];
public dataSource = new MatTableDataSource<Formateur>();
  constructor(private jwtService:JwtClientService, private route: ActivatedRoute, private formateursService: FormateurService) { 

      
       this.formateursService.getAllFormateur(this.token).subscribe(
       data=>{
      this.formateurs=JSON.parse(data);
      console.log(this.formateurs);
      this.dataSource.data=this.formateurs;
      
      }
       );
       
    
  



  }
  del(id:number){
    console.log("delet");
    if(confirm("Are you sure to delete Ce formateur ")){
    this.formateursService.deleteFormateur(localStorage.getItem("token"),id).subscribe((result)=>{
 
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


