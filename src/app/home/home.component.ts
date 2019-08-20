import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showPeopleTable = false;
  showStarshipTable = false;

  constructor() { }

  ngOnInit() {
  }

  showPeopleTableOnClick(){
    this.showPeopleTable = true;    
    this.showStarshipTable = false;
  }

  showStarshipTableOnClick(){
    this.showStarshipTable = true;
    this.showPeopleTable = false;    
  }

}
