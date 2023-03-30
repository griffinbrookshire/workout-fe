import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  workouts: Workout[] = [];

  constructor(private service: WorkoutService) {}

  ngOnInit(): void {
    this.getAllWorkouts();
  }

  getAllWorkouts() {
    this.workouts = this.service.getWorkouts();
  }

  getLifts() {
    this.workouts = this.service.getLifts();
  }

  getCardios() {
    this.workouts = this.service.getCardios();
  }

}
