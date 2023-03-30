import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workout } from '../models/workout';
import { CardioWorkout } from '../models/cardio';
import { StrengthWorkout } from '../models/strength';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private url = "http://localhost:8080";

  mockWorkouts: Workout[] = [
    new CardioWorkout(1, "Cardio", 20, "min", new Date(), 10),
    new CardioWorkout(2, "Cardio", 2, "hr", new Date(), 30),
    new StrengthWorkout(3, "Lift", 45, "min", new Date())
  ]

  constructor(http: HttpClient) { }

  getWorkouts() {
    return this.mockWorkouts;
  }

  getLifts() {
    return this.mockWorkouts.filter(w => w.type == "Lift");
  }

  getCardios(): Workout[] {
    return this.mockWorkouts.filter(w => w.type == "Cardio");
  }

  getWorkoutById(id: number): any {
    return this.mockWorkouts.find(w => w.id == id);
  }
}
