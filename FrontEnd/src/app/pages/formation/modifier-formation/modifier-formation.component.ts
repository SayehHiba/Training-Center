
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'app/Acces/data/formation';
import { FormationService } from 'app/Acces/services/formation.service';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';

import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { DomaineService } from 'app/Acces/services/domaine.service';
import { Domaine } from 'app/Acces/data/domaine';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthGuard } from 'app/Acces';

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-modifier-formation',
  templateUrl: './modifier-formation.component.html',
  styleUrls: ['./modifier-formation.component.scss']
})
export class ModifierFormationComponent implements OnInit {


  

updatedFormation : Formation = new Formation();
Show_modif: boolean=false;
authRequest:any;
formation!:Formation[];//initialisation
displayedColumns: string[] = ["titre","duree","nb_session","type_formation","domaine","budget","id"];
public dataSource = new MatTableDataSource<Formation>();

domaines!:Domaine[];//initialisation
token=localStorage.getItem("token");
SelectedF;
//domain

myControl = new FormControl();
options: Domaine[] = [];
filteredOptions: Observable<Domaine[]>;

constructor(private jwtService:JwtClientService,private authGuard:AuthGuard ,private route: ActivatedRoute, private formationService: FormationService,
  private domaineService : DomaineService) { 

    
       
       this.formationService.getAllFormation(this.token).subscribe(
       data=>{
      this.formation=JSON.parse(data);
      console.log(this.formation);
      this.dataSource.data=this.formation;

      
      
      }
       );
       
     

  }

      update(formation:Formation)
      {this.Show_modif= true;
       console.log(this.updatedFormation);
       this.updatedFormation.id= formation.id;
       this.updatedFormation.budget=formation.budget;
       this.updatedFormation.domaine=formation.domaine;
       this.updatedFormation.nb_session=formation.nb_session;
       this.updatedFormation.titre=formation.titre;
       this.updatedFormation.type_formation=formation.type_formation;
       this.SelectedF=formation.type_formation.toString();
       console.log(this.SelectedF);
     this.updatedFormation.duree=formation.duree;

      }

    onSubmit() {
      console.log(this.updatedFormation);

      this.formationService.updateFormation(this.token,this.updatedFormation).subscribe(
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

displayFn(d: Domaine): string {
  return d && d.libelle ? d.libelle : '';
}
private _filterO(name: string): Domaine[] {
  const filterValue = name.toLowerCase();

  return this.options.filter(option => option.libelle.toLowerCase().indexOf(filterValue) === 0);
  
}
  ngOnInit(): void {

       console.log(localStorage.getItem("token"));
       this.domaineService.getAllDomaine(this.token).subscribe(
       data=>{
      this.domaines=JSON.parse(data);
     
      
      
      this.options=this.domaines;
      console.log(this.options);
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.libelle),
        map(libelle => libelle ? this._filterO(libelle) : this.options.slice())
      );



  });}
}

  





