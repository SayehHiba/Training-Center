import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SessionData, SessionFormation } from '../data/session-formation';
@Injectable({
    providedIn: 'root'
})
 export class SessionService extends SessionData {
    
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


      getAllSessionFormations(token:any): Observable<any> {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.get<SessionFormation[]>(this.url+"Sessionformations", {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
        }
        deleteSessionFormation(token:any,id: number) {
            let tokenStr = 'Bearer ' + token;
            const headers = new HttpHeaders().set('Authorization', tokenStr);    
        return this.http.delete(this.url+"deleteSessionformation/"+id, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
            );    }
        afficherUneSessionFormation(token:any,id: number): Observable<any> {
            let tokenStr = 'Bearer ' + token;
            const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.get<SessionFormation>(this.url+"Sessionformation/"+id,{headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );    }
        updateSessionFormation(token,session: SessionFormation): Observable<any> {
            let tokenStr = 'Bearer ' + token;
            const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.put(this.url+"updateSessionformation/"+session.id,session,{headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );    }
        createSessionFormation(token,session:SessionFormation): Observable<any> {
             session.id=14;
            console.log(session);
            
          console.log(JSON.stringify(session));
            let tokenStr = 'Bearer ' + token;
            const headers = new HttpHeaders().set('Authorization', tokenStr);
          
            return this.http.post<SessionFormation>(this.url+'addSessionformation', session, {headers, responseType: 'text' as 'json' }).pipe(
                catchError(this.handleError)
            );
        }
}