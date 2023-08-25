import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../Services/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  userName = 'Codemind';
  password = ''
  test;

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    
    this.utilityService.userName.subscribe(res => {
      this.userName = res;
      
      console.log('res from subject', res);
    })
    this.utilityService.password.subscribe(res => {
      this.password = res;
      console.log('res from subject', res);
      
    })

  }

  updateUserName(uname){
    this.userName = uname.value;
    //console.log('Method called', uname.value);

    // we are inserting value inside observable
    this.utilityService.userName.next(uname.value);
  }
  updatePassword(pass){
    this.password = pass.value;
    this.utilityService.password.next(pass.value)
  }
}
