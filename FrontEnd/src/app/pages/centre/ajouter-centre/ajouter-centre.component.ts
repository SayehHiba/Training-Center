import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Organisme } from 'app/Acces/data/organisme';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';
import { OrganismeService } from 'app/Acces/services/organisme.service';

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
  selector: 'app-ajouter-centre',
  templateUrl: './ajouter-centre.component.html',
  styleUrls: ['./ajouter-centre.component.scss']
})
export class AjouterCentreComponent implements OnInit {
  onCountryChange(event)
    {
      console.log(event.dialCode);
      console.log(event.name);
      console.log(event.iso2);
    }
    
    
  myform: FormGroup;

  libelleFormControl = new FormControl('',[
      Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();

  constructor(private formBilder:FormBuilder,private organismeService:OrganismeService,private JwtClientService:JwtClientService) { 
    this.myform = new FormGroup({
    libelleFormControl: this.libelleFormControl,

      
    });
  }
organisme:Organisme = new Organisme();
  onSubmit() {
    let token = localStorage.getItem("token");
    this.organismeService.createOrganisme(token,this.organisme).subscribe(
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
  }
}
