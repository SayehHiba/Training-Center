import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Formateur } from 'app/Acces/data/formateur';
import { FormateurService } from 'app/Acces/services/formateur.service';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';

@Component({
  selector: 'app-modifier-formateurs',
  templateUrl: './modifier-formateurs.component.html',
  styleUrls: ['./modifier-formateurs.component.scss']
})
export class ModifierFormateursComponent implements OnInit {


  onCountryChange(event)
  {
    console.log(event.dialCode);
    console.log(event.name);
    console.log(event.iso2);
  }

  authRequest:any;
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
  
  updatedFormateur : Formateur = new Formateur();
  Show_modif: boolean=false;
  update(formateur:Formateur)
  {this.Show_modif= true;
   console.log(this.updatedFormateur);
   this.updatedFormateur.idFormateur= formateur.idFormateur;
   this.updatedFormateur.email=formateur.email;
   this.updatedFormateur.nom=formateur.nom;
   this.updatedFormateur.type=formateur.type;
   this.updatedFormateur.tel=formateur.tel;
   this.updatedFormateur.prenom=formateur.prenom;
  }
  
  onSubmit(){

    console.log(this.token);
    console.log(this.updatedFormateur);
    this.formateursService.updateFormateur(this.token,this.updatedFormateur).subscribe(
      data => {
        console.log(data);
        window.location.reload();
  
      }
      ,
        error =>{
        console.log(error);
       
      }
    );
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  ngOnInit(): void {
    
  }

}

