import { Component, OnInit, Inject } from '@angular/core';
import { FormComponent } from '../form/form.component'
import { SuggestionComponent } from '../suggestion/suggestion.component'
import {Question1, Activity} from '../interface'
import { AppService } from '../service.service'
import { tasks } from '../mock-tasks'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public generate: boolean = false
  private alltasks: Activity[] = tasks
  constructor(private service: AppService) { }

  ngOnInit() {
  }

  onGenerate(generate: boolean){
    let q1: Question1 = this.service.getQ1()
    let user: Activity = {
      name: "user",
      outdoors: 0,
      thinking: 0,
      creativity: 0,
      sports: 0,
      cost: 0,
    }
  }

}