import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  selectedate='';
    formdata={
      password:'',
      confirm_password:''
    }

  isEmailValid=false;
     gender=[
      {id:1,name:'Male'},
      {id:2,name:'female'}
     ];
     country=['India','USA','Canda','Austrialia'];
      code=[91,100,102,103];
      y;
      
      
      countrychange(z){
        console.log(z);
          this.y=this.code[this.country.indexOf(z)]
          console.log('change event');
          console.log(this.y);
          
           
      }

     OnSubmit(data){
      console.log('username:',data.value.username);
      console.log('username:',data.value.email);
      console.log('username:',data.value.password);
      console.log('username:',data.value.confirmpassword);
      
      
     }
       
     checkEmail(email) {
      // console.log(email.target.value);
  
      const domain = email.target.value.substring(email.target.value.lastIndexOf('@') + 1);
      // console.log('domain ',domain);
  
      if(domain == 'codemindtechnology.com') 
      {
        // false
        this.isEmailValid = false;
      }
      else {
        // true
        this.isEmailValid = true;
      }
    }

    count='';
    x;
  constructor() {
    
   }

  ngOnInit() {
    console.log('ngonint');
    
  }
  onClick(){
    this.x=this.count.length;
    console.log(this.count.length);
    
  }

}