import { Lift } from './lift';
import { Workout } from './workout';

export class StrengthWorkout extends Workout {
  private _power: number = 0;
  private _lifts: Lift[] = [];

  constructor(
    id: number,
    type: string,
    duration: number,
    durationUnit: string,
    date: Date
  ) {
    super(id, type, duration, durationUnit, date);
  }

  public addLift(lift: Lift) {
    this._lifts.unshift(lift);
  }

  public removeLift(lift: Lift) {
    const idx = this._lifts.indexOf(lift);
    if (idx < 0) return;
    this._lifts = this._lifts.splice(idx, 1);
    this._power -= lift.power;
  }

  public get power(): number {
    return this._lifts.reduce((sum, current) => sum + current.power, 0);
  }

  public get lifts(): Lift[] {
    return this._lifts;
  }
}
