import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Token{
  token:string;
}

export abstract class JWTData {
  abstract generateToken(request:any):any;
}
