
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  username: string = '';
  isLoading: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  submit() {
    this.isLoading = true;
    this.username = '';

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
