import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Utilisateur } from '../data/utilisateur';
import { utilisateurService } from '../services/utilisateur.service';
import { JwtClientService } from '../services/jwt-client.service';

import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

const tokenName = 'token';
export interface T{
  token:string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isLogged$ = new BehaviorSubject(false);
  private Utilisateur=new Utilisateur();
  constructor(private http: HttpClient,private userservice:utilisateurService,public jwtService: JwtClientService,private userService: utilisateurService,public router: Router) {

  }

  public get isLoggedIn(): boolean {
    return localStorage.getItem("id")!==null;
  }
  gettoken:T;

  



  public login(data,email){
   
    let resp=this.jwtService.generateToken(data);
    resp.subscribe(data=>{
    
     this.gettoken=JSON.parse(data);
     localStorage.setItem("token",this.gettoken.token);
     console.log(localStorage.getItem("token"));
  
    this.userService.getUser(this.gettoken.token,email).subscribe(
      data=>{
       this.Utilisateur=JSON.parse(data);
       console.log(this.Utilisateur);
       localStorage.setItem("id",this.Utilisateur._idUser.toString());
       localStorage.setItem("nom",this.Utilisateur._nom);
       localStorage.setItem("prenom",this.Utilisateur._prenom);
       localStorage.setItem("dateN",this.Utilisateur._dateNaissance.toString());
       localStorage.setItem("tel",this.Utilisateur._numTel.toString());
       localStorage.setItem("username",this.Utilisateur.username);
       localStorage.setItem("password",this.Utilisateur.password);
       localStorage.setItem("session",JSON.stringify(this.Utilisateur.sessions));
      
      console.log(localStorage.getItem("id"));
       
      this.router.navigateByUrl('/app/dashboard');
  });});}

  public logout() {
    localStorage.clear();
    localStorage.setItem("session",null);
   
   this.router.navigateByUrl('/pages/login');
   
  }

  public signup(name,lastname,phone,date,email,password,profil,type,pays) {
    this.userService.saveUser(name,lastname,phone,date,email,password,profil,type,pays).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl('/pages/login');
      },
      error => {
      console.log(error);
      }
      );
  }

  public get authToken(): string {
    return localStorage.getItem(tokenName);
  }

  public get userData(): Observable<any> {
    // send current user or load data from backend using token
    return this.loadUser();
  }

  private loadUser(): Observable<any> {
    // use request to load user data with token

   
    // it's fake and useing only for example

    if (localStorage.getItem('id')) {
       this.Utilisateur._idUser=Number(localStorage.getItem('id'));
       this.Utilisateur._nom=localStorage.getItem('nom');
       this.Utilisateur._prenom=localStorage.getItem('prenom');
       this.Utilisateur._dateNaissance=new Date(localStorage.getItem('dateN'));
       this.Utilisateur._numTel=Number(localStorage.getItem('nom'));
       this.Utilisateur.username=localStorage.getItem('username');
       this.Utilisateur.password=localStorage.getItem('password');
       this.Utilisateur.sessions=JSON.parse(localStorage.getItem("session"));
    
    }
    return of(this.Utilisateur);
  }
  
}
