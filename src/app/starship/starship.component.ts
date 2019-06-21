import { Component, OnInit } from '@angular/core';
import { ApiSwService } from '../api-sw.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  starships: any = [];

  constructor(
    private apiSW: ApiSwService
  ) { }

  ngOnInit() {
    this.loadNaves()
  }

  loadNaves(){
    this.apiSW.getStartShips((data)=>{
      this.starships = Object.values(data.results)
      console.log(this.starships)
    })
  }

}
