import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiSwService {  

  constructor(
    private http: HttpClient
  ) { }

  getPeople(pageUrl: string) {
    !pageUrl ? pageUrl = environment.urlPeople : pageUrl;    
    return this.http.get<any>(pageUrl);
  }

  getStartShips(callback){
    return this.http.get<any>('https://swapi.co/api/starships/').subscribe((data) => {
      callback(data)
    })
  }
}
