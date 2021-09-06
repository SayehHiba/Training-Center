
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



export class Formateur {
  

idFormateur:number;
email:string;
nom:string;
prenom:string;
tel:number;
type:number;
constructor(){}

}

export abstract class FormateurData {
  abstract  handleError(error: HttpErrorResponse): any
  abstract getAllFormateur(token:any): Observable<any>;
  abstract deleteFormateur(token:any,id:number): any;
 // abstract afficherUnFormateur(token:any,id:number):Observable<Formateur>;
  abstract updateFormateur(token:any,formateur:Formateur):Observable<any> ;
  abstract createFormateur(token:any,formation:Formateur):Observable<any>;
}
