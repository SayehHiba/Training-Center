
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formateur } from './formateur';
import { Formation } from './formation';
import { Organisme } from './organisme';

export class SessionFormation {
  

  id:number;
  date_debut:Date;
  date_fin:Date;
  lieu:string;
  nb_participants:number;
  formateur:Formateur;
  formations:Formation[];
  organisme:Organisme;
constructor(){}

}



export abstract class SessionData {
  abstract  handleError(error: HttpErrorResponse): any
  abstract getAllSessionFormations(token:any): Observable<any>;
  abstract deleteSessionFormation(token:any,id:number): any;
  //abstract afficherUneSessionFormation(token:any,id:number):Observable<SessionFormation>;
  abstract updateSessionFormation(token:any,session:SessionFormation):Observable<SessionFormation>;
  abstract createSessionFormation(token:any,session:SessionFormation):Observable<any>;
}
