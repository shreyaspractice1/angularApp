import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
 username: string = '';
  password: string = '';

  login() {
    // Here you would typically implement authentication logic.
    // For this example, let's just log the user's input.
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}