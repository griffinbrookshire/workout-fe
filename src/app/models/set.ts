export class WorkoutSet {
  private _reps: number = 0;
  private _weight: number = 0;
  private _power: number = 0;

  constructor() {}

  public get reps(): number {
    return this._reps;
  }

  public set reps(value: number) {
    this._reps = value;
    this._power = this._reps*this._weight;
  }

  public get weight(): number {
    return this._weight;
  }

  public set weight(value: number) {
    this._weight = value;
    this._power = this._reps*this._weight;
  }

  public get power() {
    return this._power;
  }
}
