export abstract class Workout {
  constructor(
    public id: number,
    public type: string,
    public duration: number,
    public durationUnit: string,
    public date: Date
  ) {}
}
