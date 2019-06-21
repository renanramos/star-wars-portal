import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { callbackify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ApiSwService {

  constructor(
    private http: HttpClient
  ) { }

  getPeople(callback){
    return this.http.get<any>('https://swapi.co/api/people/').subscribe((data)=>{
      callback(data)
    })
  }

  getStartShips(callback){
    return this.http.get<any>('https://swapi.co/api/starships/').subscribe((data) => {
      callback(data)
    })
  }
}
