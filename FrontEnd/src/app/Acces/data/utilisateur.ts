
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from './Role';
import { SessionFormation } from './session-formation';

export class Utilisateur {
  

  _idUser:number;
  _nom:string;
  _prenom:string;
  _numTel:number;
  username:string;
  password:string;
  _dateNaissance:Date;
  profil:string;
  type:string;
  pays:string;
  role:Role[];
  sessions:SessionFormation[];

	constructor() {

	}

}

export abstract class UtilisateurData {
  abstract  handleError(error: HttpErrorResponse): any
  abstract getAllUser(): Observable<Utilisateur>;
  abstract deleteUser(token,id:number): any;
  abstract afficherUser(id:number):Observable<Utilisateur>;
  abstract updateUser(token,u:Utilisateur):Observable<Utilisateur>;
  abstract saveUser(_nom:string,
    _prenom:string,
   _numTel:number,
   _dateNaissance:Date,
    username:string,
    password:string,
    profil:string,
        type:string,
        pays:string):Observable<Utilisateur>;
    abstract getUser(token,email:string):Observable<Utilisateur>;
 }
 
