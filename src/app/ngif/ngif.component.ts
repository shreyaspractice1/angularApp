import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styles: []
})
export class NgifComponent implements OnInit {
  showActions: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
