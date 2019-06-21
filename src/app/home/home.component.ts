import { Component, OnInit } from '@angular/core';
import { ApiSwService } from '../api-sw.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personagens : any = {}

  constructor(
    private apiSW: ApiSwService
  ) { }

  ngOnInit() {
    this.loadPersonagens()
  }

  loadPersonagens() {
    this.apiSW.getPeople((data)=>{
        this.personagens = Object.values(data.results)
    });
  }

}
