import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/ApplicationConstant';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private httpClient:HttpClient) { }

  registerUser(userData:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/addUser`,userData)
  }
  validateUser(userName:string):Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/validUsername/${userName}`)
  }
}
