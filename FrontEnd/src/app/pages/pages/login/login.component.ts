import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/Acces';
import { Utilisateur } from 'app/Acces/data/utilisateur';
import { JwtClientService } from 'app/Acces/services/jwt-client.service';

import { BlankLayoutCardComponent } from 'app/components/blank-layout-card';
import { utilisateurService } from '../../../Acces/services/utilisateur.service';

@Component({
  selector: 'app-login',
  styleUrls: ['../../../components/blank-layout-card/blank-layout-card.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent extends BlankLayoutCardComponent implements OnInit {
  public loginForm: FormGroup;
  public email;
  public password;
  public emailPattern = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
  error:boolean=false;


  constructor(public jwtService: JwtClientService, private userService: utilisateurService,
              public fb: FormBuilder,
              public router: Router,
              public auth:AuthService) {
    super();

    this.loginForm = this.fb.group({
      passwordFormControl: new FormControl('', Validators.required),
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern),
        Validators.maxLength(20),
      ]),
    });
    this.email = this.loginForm.get('emailFormControl');
    this.password = this.loginForm.get('passwordFormControl');
  }

  public ngOnInit() {
 
  }
  authRequest:any;
  user:Utilisateur;

  public login() {
    console.log(this.password.value);
    this.error = null;
    this.authRequest ={
    "username":this.email.value,
    "password":this.password.value
  }
  console.log(this.authRequest);
  this.auth.login(this.authRequest,this.email.value);
  

}

}