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
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Age1Component } from './age1/age1.component';
import { Age2Component } from './age2/age2.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Service1Service } from './Services/service1.service';
import { ReactiveAssignment2Component } from './reactive-assignment2/reactive-assignment2.component';
import { DemoRegistractionFormComponent } from './demo-registraction-form/demo-registraction-form.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CountPipe } from './count.pipe';
import { FilterPipe } from './filter.pipe';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { FilterPipeAssignmentComponent } from './filter-pipe-assignment/filter-pipe-assignment.component';
import { FilterUserPipe } from './filter-user.pipe';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';
import { USDcurrencyPipe } from './usdcurrency.pipe';
import { LoginComponent } from './Routing/login/login.component';
import { AboutUsComponent } from './Routing/about-us/about-us.component';
import { ContactUsComponent } from './Routing/contact-us/contact-us.component';
import { HomeComponent } from './Routing/home/home.component';
import { NewUserComponent } from './Routing/new-user/new-user.component';
import { NotfoundComponent } from './Routing/notfound/notfound.component';
import { ForgotpasswordComponent } from './Routing/forgotpassword/forgotpassword.component';
import { ProductsComponent } from './Routing/products/products.component';
import { LaptopComponent } from './Routing/products/laptop/laptop.component';
import { TvComponent } from './Routing/products/tv/tv.component';
import { TabletComponent } from './Routing/products/tablet/tablet.component';
import { WashingMachineComponent } from './Routing/products/washing-machine/washing-machine.component';





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
    Comp1Component,
    Comp2Component,
    Age1Component,
    Age2Component,
    ReactiveAssignment2Component,
    DemoRegistractionFormComponent,
    PipeDemoComponent,
    CountPipe,
    FilterPipe,
    FilterPipeComponent,
    FilterPipeAssignmentComponent,
    FilterUserPipe,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Comp6Component,
    USDcurrencyPipe,
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    NewUserComponent,
    NotfoundComponent,
    ForgotpasswordComponent,
    ProductsComponent,
    LaptopComponent,
    TvComponent,
    TabletComponent,
    WashingMachineComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    // Service1Service    // It's another method to use service 
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }