import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Question1} from '../interface'
import { AppService } from '../service.service'
import { tasks } from '../mock-tasks'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public question1: Question1 = {
    art: false,
    sports: false,
    puzzles: false
  }

  public location_ur: string
  public suggestion: string = ""
  public showPopup: boolean = false

  public q6: string = ""

  public q2_urban_rural: string
  public q3_creative: string
  public q4_athletic: string
  public q5_thinking: string

  public q2_error: boolean = false
  public q3_error: boolean = false
  public q4_error: boolean = false
  public q5_error: boolean = false
  public q6_error: boolean = false

  @Output() generate = new EventEmitter<boolean>();

  constructor(private service: AppService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.service.setQ1(this.question1)
  }

  onRadioChange(option: string){
    this.q6=option
  }

  checkRegex(): boolean{
    this.q2_error = false
    this.q3_error = false
    this.q4_error = false
    this.q5_error = false
    this.q6_error = false
    let ret: boolean = true
    if(/^urban$|^rural$/i.test(this.q2_urban_rural)== false){
      this.q2_error=true
      ret = false;
    }
    if(/^yes$|^no$/i.test(this.q3_creative)== false){
      this.q3_error=true
      ret = false;
    }
    if(/^yes$|^no$/i.test(this.q4_athletic)== false){
      this.q4_error=true
      ret = false;
    }
    if(/^yes$|^no$/i.test(this.q5_thinking)== false){
      this.q5_error=true
      ret = false;
    }
    if(this.q6.length==0){
      this.q6_error=true
      ret = false;
    }

    return ret
  }

  onGenerate(){
    let ret = this.checkRegex()
    if(ret==true){
      let outdoors = 0
      let creativity = 0
      let sports = 0
      let thinking = 0

      if(this.question1.art==true){
        creativity++
      }
      if(this.question1.sports==true){
        sports++
      }
      if(this.question1.puzzles==true){
        thinking++
      }

      if(this.q2_urban_rural.toLowerCase()=="rural"){
        outdoors++
      }

      if(this.q3_creative.toLowerCase()=="yes"){
        creativity++
      }
      if(this.q4_athletic.toLowerCase()=="yes"){
        sports++
      }
      if(this.q5_thinking.toLowerCase()=="yes"){
        thinking++
      }

      var totals = [
        {name: "outdoors", value: outdoors }, 
        {name: "creativity", value : creativity}, 
        {name:"sports", value : sports}, 
        {name:"thinking", value : thinking}]

      totals.sort((n1,n2)=> n1.value>n2.value? 1 : -1)
      console.log(totals)


      if(totals[0].name=="outdoors"){
        tasks.sort((t1, t2)=> t1.outdoors>t2.outdoors? 1: -1)

      }else if(totals[0].name=="creativity"){
        tasks.sort((t1, t2)=> t1.creativity>t2.creativity? 1: -1)

      }else if(totals[0].name=="sports"){
        tasks.sort((t1, t2)=> t1.sports>t2.sports? 1: -1)

      }else if(totals[0].name=="thinking"){
        tasks.sort((t1, t2)=> t1.thinking>t2.thinking? 1: -1)
      }
      
      this.service.changeActivity(tasks[0])

    }
  }

}