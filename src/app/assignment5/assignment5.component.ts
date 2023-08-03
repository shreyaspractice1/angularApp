import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css']
})
export class Assignment5Component implements OnInit {

  countries = ['INDIA', 'USA'];
  states = [
    { country: 'USA', name: 'New York' },
    { country: 'USA', name: 'California' },
    { country: 'USA', name: 'Florida' },
    { country: 'USA', name: 'Manchester' },
    { country: 'INDIA', name: 'Maharastra' },
    { country: 'INDIA', name: 'Delhi' },
    { country: 'INDIA', name: 'Gujrat' },
    { country: 'INDIA', name: 'Karnataka' },

  ];

  filteredStates: any;
  selectedCountry:string;
  constructor() { }

  ngOnInit() {
    
  }
  onCountryChange() {
    this.filteredStates = this.states.filter(state => state.country === this.selectedCountry);
    // this.filteredStates =  this.states.forEach(state => state.country === this.selectedCountry)
    // console.log(state);
    
  }

}