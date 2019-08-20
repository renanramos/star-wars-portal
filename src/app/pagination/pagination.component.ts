import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input() disabledPrevious: boolean;
  @Input() disabledNext: boolean;

  @Output() changePage = new EventEmitter<number>();
  
  constructor() { }

  previousPage() {
    this.changePage.emit( -10 );
  }

  nextPage() {
    this.changePage.emit( +10 );
  }
}
