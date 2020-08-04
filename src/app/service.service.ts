import { Injectable } from '@angular/core';
import { Question1, Activity } from './interface'
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {

  public words: string
  public q1: Question1 = {
    art: false,
    sports: false,
    puzzles: false
  }

  private emptyActivity: Activity = {
    name: "Ready to get a task?",
    description: "Fill in the form to get your results!",
    outdoors: 0,
    creativity: 0,
    sports: 0,
    thinking: 0,
    cost: 0,
  }

  private activities: Activity[] = []

  private activity: BehaviorSubject<Activity> = new BehaviorSubject(this.emptyActivity);
  sharedActivity = this.activity.asObservable();

  constructor() { }

  setQ1(q1: Question1){
    this.q1 = q1
    console.log("service")
  }

  getQ1(): Question1{
    return this.q1
  }

  setActivities(activities: Activity[]){
    this.activities = activities
  }

  changeActivity(activity: Activity) {
    this.activity.next(activity)
  }

}