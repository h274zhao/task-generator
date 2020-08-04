import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { AppService } from './service.service';
import { SuggestionComponent } from './suggestion/suggestion.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    MatRadioModule
    ],
  declarations: [ AppComponent, MainComponent, FormComponent, SuggestionComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
