import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Domaine } from 'app/Acces/data/domaine';
import { Formation } from 'app/Acces/data/formation';
import { DomaineService } from 'app/Acces/services/domaine.service';
import { FormationService } from 'app/Acces/services/formation.service';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
export interface DialogData{
  domaine:String;
}


@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.scss']
})
export class AjouterFormationComponent implements OnInit {



authRequest:any;
token=localStorage.getItem("token");
domaines!:Domaine[];//initialisation
SelectedF;
//domain

myControl = new FormControl();
options: Domaine[] = [];
filteredOptions: Observable<Domaine[]>;


formation:Formation = new Formation();
  myform: FormGroup;
  titreFormControl = new FormControl('', [
    Validators.required,
  
  ]);
  typeFormControl = new FormControl('', [
    Validators.required,
  
  ]);
  domaineFormControl = new FormControl('', [
    Validators.required,
  
  ]);
  dureeFormControl = new FormControl('', [
    Validators.required,
  
  ]);


  nbSessionFormControl = new FormControl('', [
    Validators.required,
  
  ]);
  budgetFormControl = new FormControl('', [
    Validators.required,
  
  ]);
  matcher = new MyErrorStateMatcher();

  
  constructor(private jwtService:JwtClientService,private formBilder:FormBuilder,private route:ActivatedRoute,private formationService:FormationService,private JwtClientService:JwtClientService, 
    private domaineService : DomaineService) { 
    this.myform = new FormGroup({
     titreFormControl : this.titreFormControl,
     typeFormControl : this.typeFormControl,
     domaineFormControl : this.domaineFormControl,
     nbSessionFormControl : this.nbSessionFormControl,
     budgetFormControl : this.budgetFormControl,
     dureeFormControl : this.dureeFormControl
    });
  }

  displayFn(d: Domaine): string {
    return d && d.libelle ? d.libelle : '';
  }
  private _filterO(name: string): Domaine[] {
    const filterValue = name.toLowerCase();
  
    return this.options.filter(option => option.libelle.toLowerCase().indexOf(filterValue) === 0);
    
  }
  onSubmit() {
    //session
       
    console.log(localStorage.getItem("token"));
    console.log(this.formation.titre);
    console.log(this.formation.budget);
    console.log(this.formation.nb_session);
    console.log(this.formation.type_formation);
    console.log(this.formation.domaine);
    console.log(this.formation.duree);
    
    this.formationService.createFormation(this.token,this.formation).subscribe(
    data=>{
      console.log(data);
      window.location.reload();
    }
    ,
    error=>{
      console.log(error);
     
    });
  
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
      
      }
       );
       
      
  



  }

  }


