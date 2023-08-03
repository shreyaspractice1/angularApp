import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';


@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
  selectedOption: string;
  display: boolean = false;
  show: boolean = true; 
  selectedcourse: string; 
  isChesked: boolean;

  courses: Course[] = [
    { course_Name: 'Angular', course_Duration: 4, course_Fees: 20000 },
    { course_Name: 'AWS-Cloud', course_Duration: 6, course_Fees: 50000 },
    { course_Name: 'DevOps', course_Duration: 12, course_Fees: 100000 }
  ]
  isChecked: boolean;

  constructor() { }

  ngOnInit() {
  }
  getOptionValue(option){
    this.selectedOption = option.target.value;
    console.log('ngswitch',option.target.value);    
  }
  onChange(value) {
    console.log(value.target.checked);
    
    this.isChecked= value.target.checked;

  }
}
