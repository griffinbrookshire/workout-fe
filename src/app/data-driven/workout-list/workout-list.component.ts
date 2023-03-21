import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/interfaces/workout';
import { WorkoutServiceService } from 'src/app/services/workout-service.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {

  workouts: Workout[] = [];

  constructor(service: WorkoutServiceService) {
    this.workouts = service.getWorkouts();
  }

  ngOnInit(): void {
  }

}
