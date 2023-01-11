import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/ApplicationConstant';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpClient:HttpClient) { }

  fetchVolunteers(): Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/volunteers`);
  }

  fetchFoster():Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/fosters`);
  }

  fetchAdopt():Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/adopt`);
  }
 
}
