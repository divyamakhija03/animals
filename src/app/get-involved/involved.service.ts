import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/ApplicationConstant';

@Injectable({
  providedIn: 'root'
})
export class InvolvedService {

  constructor(private httpClient:HttpClient) { }
  
  addVolunteer(volunteerData:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/volunteerForm`,volunteerData)
  }
  addDonate(donateDetails:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/donateForm`,donateDetails)
  }
  addFundraiser(fundData:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/fundraiser`,fundData)
  }

}
