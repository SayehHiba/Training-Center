
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Domaine } from './domaine';
export class Formation {
  

id:number;
budget:number;
duree:number;
nb_session:number;
titre:string;
type_formation:string;
domaine:Domaine;
constructor(){
   
}

}

export abstract class FormationData {
  abstract  handleError(error: HttpErrorResponse): any
  abstract getAllFormation(token:any): Observable<any>;
  abstract deleteFormation(token:any,id:number): any;
 // abstract afficherUneFormation(token:any,id:number):Observable<Formation>;
  abstract updateFormation(token:any,formation:Formation):Observable<any>;
  abstract createFormation(token:any,formation:Formation):Observable<any>;
}
