import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Profil {
  

_idProfil:number;
_libelle:string;

}

export abstract class ProfilData {
  abstract  handleError(error: HttpErrorResponse): any
  abstract getAllProfil(): Observable<Profil>;
  abstract deleteProfil(id:number): any;
  abstract afficherUnProfil(id:number):Observable<Profil>;
  abstract updateProfil(profil:Profil):Observable<Profil>;
  abstract createProfil(profil:Profil):Observable<Profil>;
}
