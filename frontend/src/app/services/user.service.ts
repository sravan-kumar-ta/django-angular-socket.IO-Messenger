import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  url: string = 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }

  loginUser(data: any) {
    let endPoint = `${this.url}/token/`
    return this.http.post(endPoint, data)
  }

  registerUser(data: any) {
    let endPoint = `${this.url}/register/`
    return this.http.post(endPoint, data)
  }
}
