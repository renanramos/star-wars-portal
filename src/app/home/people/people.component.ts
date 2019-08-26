import { Component, OnInit } from '@angular/core';
import { ApiSwService } from '../../api-sw.service';

declare var $: any;

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  personagens: any = [];
  next: string;
  previous = '';
  disabledPrevious = true;
  disabledNext = false;
  index = 1;
  showSpinner = true;
  person: any;

  constructor(
    private apiSW: ApiSwService
  ) { }

  ngOnInit() {
    this.loadPersonagens('');    
  }

  loadPersonagens(nextPage: string) {
    this.showSpinner = true;
    let people = this.apiSW.getPeople(nextPage);

    people.forEach(people => {
      this.personagens = people.results;
      this.next = people.next;
      this.previous = people.previous !== null ? people.previous : '';
      this.disabledPrevious = this.enableButton(people.previous);
      this.disabledNext = this.enableButton(people.next);
    }).catch(err => {
      this.showSpinner = false;
    })
    .finally(() => {
      this.showSpinner = false;
    });
  };

  handlePagination(event) {
    this.indexPagina(event);
    event > 0 ? this.nextPage() : this.previousPage();
  }

  nextPage() {
    this.loadPersonagens(this.next);
  }

  previousPage() {
    this.loadPersonagens(this.previous);
  }

  enableButton(url: string) {
    return url ? false : true;
  }

  indexPagina(numero) {
    this.index += numero;
  }

  openModalDetails(people: any) {
    this.person = people;
    $('#peopleModal').modal('show');
  }
}