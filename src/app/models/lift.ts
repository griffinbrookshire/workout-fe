import { WorkoutSet } from "./set";

export class Lift {
  private _power: number = 0;
  private _sets: WorkoutSet[] = [];

  constructor(
    public name: string
  ) {}

  public addSet() {
    this._sets.push(new WorkoutSet());
  }

  public removeSet(set: WorkoutSet) {
    const idx = this._sets.indexOf(set);
    if (idx < 0) return;
    this._sets = this._sets.splice(idx, 1);
    this._power -= set.power;
  }

  public get power(): number {
    this._power = this._sets.reduce((sum, current) => sum + current.power, 0);
    return this._power;
  }

  public get sets(): WorkoutSet[] {
    return this._sets;
  }
}
