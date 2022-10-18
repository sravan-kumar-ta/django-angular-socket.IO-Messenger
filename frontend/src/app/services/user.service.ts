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
  
  public addNewToken(tokenkey: string) {
    localStorage.setItem('auth_token', tokenkey);
  }

  registerUser(data: any) {
    let endPoint = `${this.url}/register/`
    return this.http.post(endPoint, data)
  }

  getallUsers() {
    const tokenkey = localStorage.getItem('auth_token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Token ${tokenkey}`
      })
    };
    return this.http.get(`${this.url}/users/`, httpOptions)
  }

  getCurrentUser() {
    const tokenkey = localStorage.getItem('auth_token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Token ${tokenkey}`
      })
    };
    return this.http.get(`${this.url}/get_user/`, httpOptions)
  }
}
