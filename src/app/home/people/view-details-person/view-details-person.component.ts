import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-details-person',
  templateUrl: './view-details-person.component.html',
  styleUrls: ['./view-details-person.component.css']
})
export class ViewDetailsPersonComponent implements OnInit {

  @Input() person: any;

  constructor() { }

  ngOnInit() {
  }

}
