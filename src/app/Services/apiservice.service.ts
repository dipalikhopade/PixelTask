
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
  baseURL="http://lab.thinkoverit.com/api/getOTP.php";
  
  constructor(private http: HttpClient) { }

  

  get_OTP(val: any):Observable<any>  {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(val);
    console.log(body);
   return(this.http.post(this.baseURL, body, { 'headers': headers }));
  }


  verify_OTP(val: any):Observable<any>  {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(val);
    console.log(body);
   return(this.http.post(this.baseURL, body, { 'headers': headers }));
  }
}
