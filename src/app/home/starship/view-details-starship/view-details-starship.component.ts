import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-details-starship',
  templateUrl: './view-details-starship.component.html',
  styleUrls: ['./view-details-starship.component.css']
})
export class ViewDetailsStarshipComponent implements OnInit {

  @Input() starship: any;

  constructor() { }

  ngOnInit() {
  }

}
