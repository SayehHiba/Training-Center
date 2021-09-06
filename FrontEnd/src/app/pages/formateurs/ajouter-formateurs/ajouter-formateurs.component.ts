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
import { ActivatedRoute } from '@angular/router';
import { Formateur } from 'app/Acces/data/formateur';
import { FormateurService } from 'app/Acces/services/formateur.service';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';

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
  selector: 'app-ajouter-formateurs',
  templateUrl: './ajouter-formateurs.component.html',
  styleUrls: ['./ajouter-formateurs.component.scss']
})
export class AjouterFormateursComponent implements OnInit {

  onCountryChange(event)
  {
    console.log(event.dialCode);
    console.log(event.name);
    console.log(event.iso2);
  }

  
  myform: FormGroup;
  nameFormControl = new FormControl('', [
    Validators.required,
  
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

 typeFormControl = new FormControl('', [
    Validators.required,
    
  ]);

  matcher = new MyErrorStateMatcher();

  
  constructor(private formBilder:FormBuilder,private route:ActivatedRoute,private formateurService:FormateurService,private JwtClientService:JwtClientService) { 
    this.myform = new FormGroup({
    emailFormControl: this.emailFormControl,
    nameFormControl : this.nameFormControl,
      
    });
  }
formateur:Formateur = new Formateur();
  onSubmit() {
    let token = localStorage.getItem("token");
    this.formateurService.createFormateur(token,this.formateur).subscribe(
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
