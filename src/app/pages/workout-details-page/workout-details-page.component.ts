import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WorkoutService } from 'src/app/services/workout.service';
import { Lift } from 'src/app/models/lift';

@Component({
  selector: 'app-workout-details-page',
  templateUrl: './workout-details-page.component.html',
  styleUrls: ['./workout-details-page.component.css']
})
export class WorkoutDetailsPageComponent implements OnInit {

  workout: any;
  public durationUnits: string[] = ["sec", "min", "hr"]
  blackTriangleUrl = "../../../assets/black-triangle-right.png";
  liftsExpanded = false;

  constructor(
    private route: ActivatedRoute,
    private service: WorkoutService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getWorkout();
  }

  getWorkout(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.workout = this.service.getWorkoutById(id);
    console.log(this.workout);
  }

  save() {
    // Add up all the powers!
    console.log(this.workout);
    const setPower = this.workout.lifts.reduce((sum: number, current: { total: any; }) => sum + current.total, 0);
  }

  goBack() {
    this.location.back();
  }

  toggleLifts() {
    if (this.liftsExpanded) {
      this.blackTriangleUrl = "../../../assets/black-triangle-right.png";
    } else {
      this.blackTriangleUrl = "../../../assets/black-triangle-down.png";
    }
    this.liftsExpanded = !this.liftsExpanded;
  }

  addLift() {
    this.workout.addLift(new Lift(""))
    if (!this.liftsExpanded) this.toggleLifts();
  }

}
