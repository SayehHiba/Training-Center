import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Role {
    _id:number;
    _name:string;
    _description:string;

}

export abstract class RoleData {
  abstract getRoleData(token): Observable<Role>;
  abstract  handleError(error: HttpErrorResponse): any



  
}