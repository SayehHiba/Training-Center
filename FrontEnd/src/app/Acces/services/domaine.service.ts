import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Domaine, DomaineData } from '../data/domaine';
@Injectable({
    providedIn: 'root'
})
 export class DomaineService extends DomaineData {
   
    
     url='http://localhost:3500/';
     constructor(private http: HttpClient){
         super();
     }
     
handleError(error: HttpErrorResponse): any {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(
           ` Backend returned code ${error.status},`  +
           ` body was: ${error.error}`);
        }
        return throwError(
          'Something bad happened; please try again later.');
      }
      getAllDomaine(token:any): Observable<any> {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.get<Domaine[]>(this.url+"Domaines", {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
      }
      deleteDomaine(token:any,id: number) {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.delete(this.url+"deleteDomaine/"+id, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
  
    }
    /*afficherUnDomaine(id: number): Observable<any> {
        return this.http.get<Domaine>(`${this.url}/${id}`).pipe(
            catchError(this.handleError)
        );
    }*/
    updateDomaine(token:any,domaine:Domaine):Observable<any> {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.put<Domaine>(this.url+'updateDomaine/'+domaine.id,domaine, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
  
    }
    createDomaine(token,domaine: Domaine): Observable<any> {
        
      let tokenStr = 'Bearer ' + token;
      const headers = new HttpHeaders().set('Authorization', tokenStr);
      return this.http.post<Domaine>(this.url+'addDomaine', domaine, {headers, responseType: 'text' as 'json' }).pipe(
          catchError(this.handleError)
      );
  }
   
    }