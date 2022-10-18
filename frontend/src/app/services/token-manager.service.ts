import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {

  constructor() { }

  public addNewToken(tokenkey: string) {
    localStorage.setItem('auth_token', tokenkey);
  }
}
