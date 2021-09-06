import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Formateur } from 'app/Acces/data/formateur';
import { Formation } from 'app/Acces/data/formation';
import { Organisme } from 'app/Acces/data/organisme';
import { SessionFormation } from 'app/Acces/data/session-formation';
import { FormateurService } from 'app/Acces/services/formateur.service';
import { FormationService } from 'app/Acces/services/formation.service';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';
import { OrganismeService } from 'app/Acces/services/organisme.service';
import { SessionService } from 'app/Acces/services/session-formation.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


export interface User {
  name: string;
}
@Component({
  selector: 'app-ajoutersessionformation',
  templateUrl: './ajoutersessionformation.component.html',
  styleUrls: ['./ajoutersessionformation.component.scss']
})
export class AjoutersessionformationComponent implements OnInit {
  
  periode = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  formAjouter: FormGroup;
  authRequest:any;
  token=localStorage.getItem("token");
  organismes!:Organisme[];//initialisation
  formateurs!:Formateur[];
  formations!:Formation[];
  displayedColumns: string[] = ["id","titre","duree","nb_session","type_formation","domaine","budget"];
public dataSource = new MatTableDataSource<Formation>();
selection = new SelectionModel<Formation>(true, []);

 sessionFormation : SessionFormation = new SessionFormation();
  //chips autocomplet
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [1,2];
 formationCtrl = new FormControl();


 //autocomplet organisme
 myControl = new FormControl();
 options: Organisme[] = [];
 filteredOptions: Observable<Organisme[]>;
 //autocomplet formateur
 myControlF = new FormControl();
 optionsF: Formateur[] = [];
 filteredOptionsF: Observable<Formateur[]>;

 @ViewChild('formationInput') formationInput: ElementRef<HTMLInputElement>;
 @ViewChild('auto') matAutocomplete: MatAutocomplete;


  constructor(private jwtService:JwtClientService,private organismeService:OrganismeService, 
    private formateurService : FormateurService, private sessionFormationService : SessionService, private formationService : FormationService) { 
    this.formAjouter = new FormGroup({  });
  }

  //add formation
 
 
 //ajouter session formation
  onSubmit() {

   
    
      this.sessionFormation.formations=this.selection.selected;
   this.sessionFormationService.createSessionFormation(this.token,this.sessionFormation).subscribe(
    data=>{
      console.log(data);
      window.location.reload();
    }
    ,
    error=>{
      console.log(error);  
    });
  }
/** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}

/** The label for the checkbox on the passed row */
checkboxLabel(row?: Formation): string {
  if (!row) {
    return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
}

  displayFn(organisme: Organisme): string {
    return organisme && organisme.libelle ? organisme.libelle : '';
  }
  displayFnF(formateur: Formateur): string {
    return formateur && formateur.email ? formateur.email : '';
  }

  private _filterF(name: string): Formateur[] {
    const filterValue = name.toLowerCase();

    return this.optionsF.filter(option => option.email.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterO(name: string): Organisme[] {
    const filterValue = name.toLowerCase();
  
    return this.options.filter(option => option.libelle.toLowerCase().indexOf(filterValue) === 0);
    
  }

  ngOnInit(): void {
    
   



       //get formateurs
       this.formateurService.getAllFormateur(this.token).subscribe(
       data=>{
      this.formateurs=JSON.parse(data);
      console.log(this.formateurs);
      this.optionsF=this.formateurs;
      this.filteredOptionsF = this.myControlF.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filterF(name) : this.optionsF.slice())
            );
          });

       //get organismes
       this.organismeService.getAllOrganisme(this.token).subscribe(
       data=>{
      this.organismes=JSON.parse(data);
      console.log(this.organismes);
     this.options=this.organismes;
     this.filteredOptions = this.myControl.valueChanges
     .pipe(
       startWith(''),
       map(value => typeof value === 'string' ? value : value.libelle),
       map(libelle => libelle ? this._filterO(libelle) : this.options.slice())
     );
    }
       );
        // get formations
       this.formationService.getAllFormation(this.token).subscribe(
        data=>{
       this.formations=JSON.parse(data);
       console.log(this.formations);
       this.dataSource.data=this.formations;
      
      },
      error => { console.log(error); } );
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
  

