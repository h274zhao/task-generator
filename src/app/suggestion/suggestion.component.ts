import { Component, Inject, OnInit, Input } from '@angular/core';
import { AppService } from '../service.service'
import {Activity} from '../interface'

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  public cardTitle1: string = "Ready to get a task?"
  public cardContent1: string = "Fill in the form to get your results!"
  public cardImg1 = ""
  public btnToggle: boolean = true

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.sharedActivity.subscribe(a => this.onChangeCard(a))
  }

  onChangeCard(activity: Activity){
    console.log(activity)
    this.cardTitle1 = activity.name
    this.cardContent1 = activity.description
    //this.cardImg1 = ""
    
    //"https://image.flaticon.com/icons/svg/1165/1165187.svg"
  }

}