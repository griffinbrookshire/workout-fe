import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workout } from '../interfaces/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutServiceService {

  private url = "http://localhost:8080";

  mockWorkouts: Workout[] = [
    {
      type: "Lift",
      duration: 45,
      durationUnit: "min"
    },
    {
      type: "Run",
      duration: 30,
      durationUnit: "min"
    }
  ]

  constructor(http: HttpClient) { }

  getWorkouts() {
    return this.mockWorkouts;
  }
}
