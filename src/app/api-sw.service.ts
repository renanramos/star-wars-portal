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

  getStartShips(pageUrl: string){
    pageUrl = !pageUrl ? environment.urlStarship : pageUrl;
    return this.http.get<any>(pageUrl);
  }
}
