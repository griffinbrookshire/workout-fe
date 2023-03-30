import { Component, Input, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';

@Component({
  selector: 'app-workout-list-item',
  templateUrl: './workout-list-item.component.html',
  styleUrls: ['./workout-list-item.component.css']
})
export class WorkoutListItemComponent implements OnInit {

  @Input() workout: any;
  imgUrl: String = "";
  imgUrlDict: { [key: string]: string } = {
    "Lift": "assets/dumbell-icon.jpg",
    "Cardio": "assets/running-icon.png"
  };

  constructor() { }

  ngOnInit(): void {
    if (this.workout) {
      this.imgUrl = this.imgUrlDict[this.workout.type];
    }
  }

}
