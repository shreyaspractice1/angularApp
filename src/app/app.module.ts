import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DemoComponent } from './demo/demo.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { DemodatabindingComponent } from './demodatabinding/demodatabinding.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { PracticeComponent } from './practice/practice.component';
import { CustdirDirective } from './custdir.directive';
import { Assignment5Component } from './assignment5/assignment5.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { Assignment6Component } from './assignment6/assignment6.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormAssignmentComponent } from './reactive-form-assignment/reactive-form-assignment.component';
import { Assignment7Component } from './assignment7/assignment7.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ChildComponent,
    DemodatabindingComponent,
    Assignment2Component,
    Assignment3Component,
    NgifComponent,
    NgForComponent,
    NgSwitchComponent,
    Assignment4Component,
    AttributeDirectivesComponent,
    PracticeComponent,
    CustdirDirective,
    Assignment5Component,
    SimpleFormComponent,
    Assignment6Component,
    ReactiveFormsComponent,
    ReactiveFormAssignmentComponent,
    Assignment7Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }