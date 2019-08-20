import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private host = `http://localhost:`
  private port = `5000`
  private apiUrl = `/users/login`
  private basicUrl = `${this.host}${this.port}`

  constructor(
    private http: HttpClient
  ) { }

  login(user: User) {

    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    const params = new HttpParams({fromObject: {'username': user.username,'password': user.password}});
    const options = {
      headers: headers,
      params: params
    }
    
    return this.http.get<any>(`${this.basicUrl}${this.apiUrl}`, options );

  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

}
