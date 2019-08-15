import { Component, OnInit } from '@angular/core';
import { ApiSwService } from '../api-sw.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personagens: any = []
  next: string;
  previous = '';
  disabled = true;

  constructor(
    private apiSW: ApiSwService
  ) { }

  ngOnInit() {
    this.loadPersonagens('');
    
  }

  loadPersonagens(nextPage: string) {
    this.apiSW.getPeople(nextPage).subscribe(people => {
      this.personagens = people.results;
      this.next = people.next;   
      this.previous = people.previous !== null ? people.previous : '';
      this.disabled = this.previous.length > 0 ? false : true;
    });
  }

  nextPage() {
    this.loadPersonagens(this.next);
  }

  previousPage(){
    this.loadPersonagens(this.previous);
  }

}
