import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Organisme, OrganismeData } from '../data/organisme';


@Injectable({
    providedIn: 'root'
})
 export class OrganismeService extends OrganismeData {
    
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
      getAllOrganisme(token:any): Observable<any> {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.get<Organisme[]>(this.url+"organisme", {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
      }
      deleteOrganisme(token:any,id: number) {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.delete(this.url+"deleteorganisme/"+id, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
  
    }
    /*afficherUnOrganisme(id: number): Observable<any> {
        return this.http.get<Organisme>(`${this.url}/${id}`).pipe(
            catchError(this.handleError)
        );
    }*/
    updateOrganisme(token:any,organisme:Organisme):Observable<any> {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.put<Organisme>(this.url+'updateorganisme/'+organisme.idOrganisme,organisme, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
  
    }
    createOrganisme(token,organisme: Organisme): Observable<any> {
        
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.post<Organisme>(this.url+'addorganisme', organisme, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
    }
 }