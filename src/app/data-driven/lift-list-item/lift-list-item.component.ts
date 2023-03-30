import { Component, Input, OnInit } from '@angular/core';
import { WorkoutSet } from 'src/app/models/set';

@Component({
  selector: 'app-lift-list-item',
  templateUrl: './lift-list-item.component.html',
  styleUrls: ['./lift-list-item.component.css']
})
export class LiftListItemComponent implements OnInit {

  @Input() lift: any;

  constructor() { }

  ngOnInit(): void {}

  addSet() {
    this.lift.addSet();
  }

}
