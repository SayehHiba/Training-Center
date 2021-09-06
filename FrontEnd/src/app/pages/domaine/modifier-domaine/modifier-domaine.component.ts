import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Domaine } from 'app/Acces/data/domaine';
import { DomaineService } from 'app/Acces/services/domaine.service';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';

@Component({
  selector: 'app-modifier-domaine',
  templateUrl: './modifier-domaine.component.html',
  styleUrls: ['./modifier-domaine.component.scss']
})
export class ModifierDomaineComponent implements OnInit {

  onCountryChange(event)
  {
    console.log(event.dialCode);
    console.log(event.name);
    console.log(event.iso2);
  }

  authRequest:any;
	token=localStorage.getItem("token");
  domaines!:Domaine[];
  displayedColumns: string[] = ["libelle","id"];
  public dataSource = new MatTableDataSource<Domaine>();
  constructor(private jwtService:JwtClientService, private route: ActivatedRoute, private domaineService: DomaineService) { 
    this.domaineService.getAllDomaine(this.token).subscribe(
      data=>{
     this.domaines=JSON.parse(data);
     console.log(this.domaines);
     this.dataSource.data=this.domaines;
     
     }
      );   
      
    
 }
       updatedDomaine : Domaine = new Domaine();

       Show_modif: boolean=false;
       update(domaine:Domaine)
       {this.Show_modif= true;
        console.log(this.updatedDomaine);
        this.updatedDomaine.id= domaine.id;
        this.updatedDomaine.libelle=domaine.libelle;
     
       }

       onSubmit(){

        console.log(this.token);
        console.log(this.updatedDomaine);
        this.domaineService.updateDomaine(this.token,this.updatedDomaine).subscribe(
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

