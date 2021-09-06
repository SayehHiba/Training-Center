
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Domaine {
  

id:number;
libelle:string;
constructor(){}

}

export abstract class DomaineData {

  abstract  handleError(error: HttpErrorResponse): any
  abstract getAllDomaine(token:any): Observable<any>;
  abstract deleteDomaine(token:any,id:number): any;
  //abstract afficherUnDomaine(token:any,id:number):Observable<Domaine>;
  abstract updateDomaine(token:any,domaine:Domaine):Observable<any>;
  abstract createDomaine(token:any,domaine:Domaine):Observable<any>;
}
