import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Profil, ProfilData } from '../data/profil';
@Injectable({
    providedIn: 'root'
})
 export class ProfilService extends ProfilData {
    
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
      getAllProfil(): Observable<any> {
        return this.http.get<Profil>(this.url).pipe(
            catchError(this.handleError)
        );
    }
    deleteProfil(id: number) {
        return this.http.delete(`${this.url}/${id}`, { responseType: 'text' }).pipe(
            catchError(this.handleError)
            );
    }
    afficherUnProfil(id: number): Observable<any> {
        return this.http.get<Profil>(`${this.url}/${id}`).pipe(
            catchError(this.handleError)
        );
    }
    updateProfil(profil: Profil): Observable<any> {
        return this.http.put(`${this.url}/${profil._idProfil}`,profil).pipe(
            catchError(this.handleError)
        );
    }
    createProfil(profil: Profil): Observable<any> {
        return this.http.post(`${this.url}`, profil).pipe(
            catchError(this.handleError)
        );
    }
}