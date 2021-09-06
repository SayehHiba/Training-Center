import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Formateur, FormateurData } from '../data/formateur';

@Injectable({
    providedIn: 'root'
})
 export class FormateurService extends FormateurData {
  
   
    
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
      getAllFormateur(token:any): Observable<any> {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.get<Formateur[]>(this.url+"formateurs", {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
      }
      deleteFormateur(token:any,id: number) {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.delete(this.url+"supprimereformateur/"+id, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
  
    }
     /* afficherUnFormateur(id: number): Observable<any> {
        return this.http.get<Formateur>(`${this.url}/${id}`).pipe(
          catchError(this.handleError)
      );
      }*/
      updateFormateur(token:any,formateur:Formateur):Observable<any> {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.put<Formateur>(this.url+'updateformateur/'+formateur.idFormateur,formateur, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
  
    }
    createFormateur(token,formateur: Formateur): Observable<any> {
        
      let tokenStr = 'Bearer ' + token;
      const headers = new HttpHeaders().set('Authorization', tokenStr);
      return this.http.post<Formateur>(this.url+'addformateur', formateur, {headers, responseType: 'text' as 'json' }).pipe(
          catchError(this.handleError)
      );
  }
}
