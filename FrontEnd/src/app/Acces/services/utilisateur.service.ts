import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Utilisateur, UtilisateurData } from '../data/utilisateur';
@Injectable({
    providedIn: 'root'
})
 export class utilisateurService extends UtilisateurData {
    
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

    getAllUser(): Observable<any> {
        return this.http.get<Utilisateur>(this.url).pipe(
            catchError(this.handleError)
        );   
     }
    deleteUser(token,id: number) {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.delete(this.url+"supprimeruser/"+id, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
          }
    afficherUser(id: number): Observable<any> {
        return this.http.get<Utilisateur>(`${this.url}/${id}`).pipe(
            catchError(this.handleError)
        );  
      }
      updateUser(token, u:Utilisateur): Observable<any> {
        let req:any ={
            "_idUser":u._idUser,
            "_nom":u._nom,
            "_prenom":u._prenom,
            "_numTel":u._numTel,
            "username":u.username,
            "password":u.password,
            "_dateNaissance":u._dateNaissance,
           "profil":u.profil,
            "type":u.type,
            "pays":u.pays,
            "sessions":u.sessions,
            "roles":[{"id":2,"name": "USER","description": "Participant dans la formation"}]
            
            
        }

        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        console.log(u);
        return this.http.put<Utilisateur>(this.url+'updateuser/'+u._idUser,u, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
    }
    saveUser(_nom:string,
        _prenom:string,
       _numTel:number,
       _dateNaissance:Date,
        username:string,
        password:string,
        profil:string,
        type:string,
        pays:string): Observable<any> {
           let req:any ={
                "_nom":_nom,
                "_prenom":_prenom,
                "_numTel":_numTel,
                "username":username,
                "password":password,
                "_dateNaissance":_dateNaissance,
               "profil":profil,
                "type":type,
                "pays":pays,
                "roles":[{"id":2,"name": "USER","description": "Participant dans la formation"}],
                "sessions":[]
                
            }
            console.log(req)
              return this.http.post<Utilisateur>(this.url+'signup', req).pipe(
            catchError(this.handleError)
        );
    }
    getUser(token,email:string):Observable<any>{

        let tokenStr = 'Bearer ' + token;
     
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.get<Utilisateur>(this.url+'getUser/'+email, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
    }
}