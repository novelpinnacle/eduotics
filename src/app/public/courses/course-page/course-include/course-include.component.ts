import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'course-include',
    templateUrl: './course-include.component.html',
    styleUrls: ['./course-include.component.css'],
    standalone: false
})
export class CourseIncludeComponent implements OnInit {

  @Input() course
  
  constructor() { }

  ngOnInit(): void {
  }

  getPathFromRoot(path){  
    return path.slice(14)
  }

}
