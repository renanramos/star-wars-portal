import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  @Input() person: any;

  constructor() { }

  ngOnInit() {
  }

}
