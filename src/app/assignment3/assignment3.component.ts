import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  @Input() courses: string[];

  constructor() { }

  ngOnInit() {
    console.log("Input data from parent",this.courses);

  }
 
}