import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../data/jwt-client';


@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private httpClient: HttpClient) { }


  public generateToken(request:any){
    return this.httpClient.post<string>("http://localhost:3500/token/generate-token", request, {  responseType: 'text' as 'json' });
  }


 
}