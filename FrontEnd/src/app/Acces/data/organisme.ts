
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Organisme {
  

idOrganisme:number;
libelle:string;
constructor(){}

}

export abstract class OrganismeData {


  abstract  handleError(error: HttpErrorResponse): any
  abstract getAllOrganisme(token:any): Observable<any>;
  abstract deleteOrganisme(token:any,id:number): any;
 // abstract afficherUnOrganisme(token:any,id:number):Observable<Organisme>;
  abstract updateOrganisme(token:any,formation:Organisme):Observable<any>;
  abstract createOrganisme(token:any,formation:Organisme):Observable<any>;

}
