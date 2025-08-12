import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'why-eduotics',
    templateUrl: './why-eduotics.component.html',
    styleUrls: ['./why-eduotics.component.css'],
    standalone: false
})
export class WhyEduoticsComponent implements OnInit {

  circle = {
    active:"LiveClassroom"
  }

  constructor() { }

  ngOnInit(): void {
  
  }

}