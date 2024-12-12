import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css'],
    standalone: false
})
export class CoursesComponent implements OnInit {

  courses = [
    "IIT-JEE",
    "NEET",
    "FOUNDATION",
    "CODING",
    "GOVERNMENT",
    "ENGINEERING",
    "SKILL DEVELOPMENT"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
