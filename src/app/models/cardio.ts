import { Workout } from "./workout";

export class CardioWorkout extends Workout {
  constructor(
    id: number,
    type: string,
    duration: number,
    durationUnit: string,
    date: Date,
    public distance: number
  ) {
    super(id, type, duration, durationUnit, date);
  }
}
