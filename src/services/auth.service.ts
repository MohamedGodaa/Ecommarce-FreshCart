import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  userData:any;
  signupForm(uesrData:object):Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,uesrData)
  }

  loginForm(uesrData:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,uesrData)
  }
  forGetPassword(email:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,email)
  }
  verifyResetCode(code:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,code)
  }
  resetPassword(code:any):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,code)
  }

  decodeUser():void{
    const encode = localStorage.getItem('_token')

    if(encode !== null){
      const decode = jwtDecode(encode)
      this.userData = decode
      console.log(decode)
    }
  }
}
