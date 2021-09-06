import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Formateur } from 'app/Acces/data/formateur';
import { Organisme } from 'app/Acces/data/organisme';
import { FormateurService } from 'app/Acces/services/formateur.service';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';
import { OrganismeService } from 'app/Acces/services/organisme.service';
@Component({
  selector: 'app-modifier-centre',
  templateUrl: './modifier-centre.component.html',
  styleUrls: ['./modifier-centre.component.scss']
})

export class ModifierCentreComponent implements OnInit {

  onCountryChange(event)
  {
    console.log(event.dialCode);
    console.log(event.name);
    console.log(event.iso2);
  }

  authRequest:any;
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
  
  updatedOrganisme : Organisme = new Organisme();
  Show_modif: boolean=false;
  update(id)
  {
    console.log(id);
    this.Show_modif= true;
   console.log(this.updatedOrganisme);
   this.updatedOrganisme.idOrganisme=id;

  }
  
  onSubmit(){

    console.log(this.token);
    console.log(this.updatedOrganisme);
    this.organismeService.updateOrganisme(this.token,this.updatedOrganisme).subscribe(
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

export interface T{
  token:string;
}


