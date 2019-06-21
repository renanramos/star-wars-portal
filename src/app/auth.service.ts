import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private host = `http://localhost:`
  private port = `5000`
  private apiUrl = `/api/users`
  private basicUrl = `${this.host}${this.port}`

  constructor(
    private http: HttpClient
  ) { }

  login(username: String, password: String, callback) {

    return this.http.post(`${this.basicUrl}${this.apiUrl}`, { username, password }).subscribe((data) => {
      callback(data)
    })

  }

}
