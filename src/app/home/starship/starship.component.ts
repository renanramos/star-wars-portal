import { Component, OnInit } from '@angular/core';
import { ApiSwService } from '../../api-sw.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  starships: any = [];
  next: string;
  previous = '';
  disabledPrevious = true;
  disabledNext = false;
  index = 1;
  showSpinner = true;

  constructor(
    private apiSW: ApiSwService
  ) { }

  ngOnInit() {
    this.loadNaves('')
  }

  loadNaves(nextPage: string){

    this.showSpinner = true;
    let starships = this.apiSW.getStartShips(nextPage);

    starships.forEach(starship => {
      this.starships = starship.results;
      this.next = starship.next;
      this.previous = starship.previous !== null ? starship.previous : '';
      this.disabledPrevious = this.enableButton(starship.previous);
      this.disabledNext = this.enableButton(starship.next);
    }).catch(err => {
      this.showSpinner = false;
    })
    .finally(() => {
      this.showSpinner = false;
    })
  }

  handlePagination(event) {
    this.indexPagina(event);
    event > 0 ? this.nextPage() : this.previousPage();
  }

  nextPage() {
    this.loadNaves(this.next);
  }

  previousPage() {
    this.loadNaves(this.previous);
  }
  
  enableButton(url: string) {
    return url ? false : true;
  }

  indexPagina(numero) {
    this.index += numero;
  }

}
