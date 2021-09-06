import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'app/Acces';
import { utilisateurService } from 'app/Acces/services/utilisateur.service';


import { BlankLayoutCardComponent } from 'app/components/blank-layout-card';

@Component({
  selector: 'app-sign-up',
  styleUrls: ['../../../components/blank-layout-card/blank-layout-card.component.scss'],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent extends BlankLayoutCardComponent implements OnInit {

  erreur:boolean=false;
  public signupForm: FormGroup;
  public profil;
  public type;
  public pays;
  public name;
  public lastname;
  public phone;
  public date;
  public password;
  public email;
  public emailPattern = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
  public error: string;

  constructor(
              public fb: FormBuilder,
              public router: Router,
              private userService :utilisateurService,public auth:AuthService) {
    super();

    this.signupForm = this.fb.group({
      passwordFormControl: new FormControl('', Validators.required),
     
      emailFormControl: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      nameFormControl : new FormControl('', [ Validators.required
      ]),
      lastnameFormControl : new FormControl('', [
        Validators.required,
       
      ]),
      phoneFormControl : new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      dateFormControl : new FormControl('', [
        Validators.required,
      
      ]),
      profilFormControl : new FormControl('', [
        Validators.required,
      
      ]),
      typeFormControl : new FormControl('', [
        Validators.required,
      
      ]),
      paysFormControl : new FormControl('', [
        Validators.required,
      
      ]),


    });
   
    this.password = this.signupForm.get('passwordFormControl');
    this.email = this.signupForm.get('emailFormControl');
    this.name = this.signupForm.get('nameFormControl');
    this.lastname = this.signupForm.get('lastnameFormControl');
    this.phone = this.signupForm.get('phoneFormControl');
    this.date = this.signupForm.get('dateFormControl');
    this.profil=this.signupForm.get('profilFormControl');
    this.type=this.signupForm.get('typeFormControl');
    this.pays=this.signupForm.get('paysFormControl');
    console.log(this.date);
  }
  authRequest:any;

  public ngOnInit() {
   
  }

  public login() {
    console.log("Form Submitted!");
    console.log(this.name.value+""+this.lastname.value);
    console.log(this.phone.value);
    console.log(this.date.value);
    console.log(this.phone.value);
    console.log(this.password.value);
    console.log(this.email.value);
    this.auth.signup(this.name.value,this.lastname.value,this.phone.value,this.date.value,this.email.value,this.password.value,this.profil.value,this.type.value,this.pays.value);
   
  }
  onCountryChange(event)
  {
    console.log(event.dialCode);
    console.log(event.name);
    console.log(event.iso2);
  }

}
