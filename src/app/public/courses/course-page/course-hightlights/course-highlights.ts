import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'course-highlights',
    templateUrl: './course-highlights.html',
    styleUrls: ['./course-highlights.css'],
    standalone: false
})
export class CourseHighlightsomponent implements OnInit {

  @Input() course

  constructor() { }

  ngOnInit(): void {
  }

}
