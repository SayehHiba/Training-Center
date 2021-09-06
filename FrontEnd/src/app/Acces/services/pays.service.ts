import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pays, PaysData } from '../data/pays';

@Injectable({
    providedIn: 'root'
})
 export class PaysService extends PaysData {
 
   
    
     url='';
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

      getAllPays(): Observable<any> {
        return this.http.get<Pays>(this.url).pipe(
            catchError(this.handleError)
        );
          }
    deletePays(id: number) {
        return this.http.delete(`${this.url}/${id}`, { responseType: 'text' }).pipe(
            catchError(this.handleError)
            );
    }
    afficherUnPays(id: number): Observable<any> {
        return this.http.get<Pays>(`${this.url}/${id}`).pipe(
            catchError(this.handleError)
        );

    }
    updatePays(pays: Pays): Observable<any> {
        return this.http.put(`${this.url}/${pays._idPays}`,pays).pipe(
            catchError(this.handleError)
        );
    }
    createPays(pays: Pays): Observable<any> {
        return this.http.post(`${this.url}`, pays).pipe(
            catchError(this.handleError)
        );    }
 }