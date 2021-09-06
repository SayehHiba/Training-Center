import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGuard, AuthService } from 'app/Acces';
import { Utilisateur } from 'app/Acces/data/utilisateur';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
})
export class CommonLayoutComponent implements OnInit {

  public user:Utilisateur;
  idUser=localStorage.getItem("id");
  constructor(private authService: AuthService,
              private router: Router,private authGuard:AuthGuard ) {
                this.authGuard.canActivate();
              }
           
  public ngOnInit() {
    this.authService.userData.subscribe(Utilisateur =>  {
    this.user=Utilisateur;
    });
  }

  public logout() {
    this.authService.logout();
  }
}
