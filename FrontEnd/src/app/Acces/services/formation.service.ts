import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Formation, FormationData } from '../data/formation';
@Injectable({
    providedIn: 'root'
})
 export class FormationService extends FormationData {
 
   
    
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

      getAllFormation(token:any): Observable<any> {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.get<Formation[]>(this.url+"formations", {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
    
    }
    deleteFormation(token:any,id: number) {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.delete(this.url+"deleteFormation/"+id, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
  
    }
    /*afficherUneFormation(id: number): Observable<any> {
      return this.http.get<Formation>(`${this.url}/${id}`).pipe(
        catchError(this.handleError)
    );
    }*/
    updateFormation(token:any,formation:Formation):Observable<any> {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        let request : any = {
            "id": formation.id ,
            "titre":formation.titre,
            "type_formation": formation.type_formation,
            "nb_session": formation.nb_session,
            "duree": formation.duree,
            "budget": formation.budget,
            "domaine": {
                "id": formation.domaine.id
                
            }
        }
        return this.http.put<Formation>(this.url+'updateFormation/'+formation.id,request, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
  
    }

 


    createFormation(token,formation: Formation): Observable<any> {
        
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        let request : any = {
            "id": formation.id ,
            "titre":formation.titre,
            "type_formation": formation.type_formation,
            "nb_session": formation.nb_session,
            "duree": formation.duree,
            "budget": formation.budget,
            "domaine": {
                "id": formation.domaine.id
                
            }
        }
        return this.http.post(this.url+'addFormation', request, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
    }

    
 }