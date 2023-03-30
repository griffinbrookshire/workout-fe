import { Component, Input, OnInit } from '@angular/core';
import { Lift } from 'src/app/models/lift';

@Component({
  selector: 'app-lift-list',
  templateUrl: './lift-list.component.html',
  styleUrls: ['./lift-list.component.css']
})
export class LiftListComponent implements OnInit {

  @Input() lifts: Lift[] = [];

  constructor() { }

  ngOnInit(): void {}

}
