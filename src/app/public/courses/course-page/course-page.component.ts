import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';
import courses from "../courses"

@Component({
  selector: 'course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css'],
})
export class CoursePageComponent implements OnInit {

  activePart = {
    active: "Overview"
  }

  course
  constructor(
    private route: ActivatedRoute,
    private coreService: CoreService
  ) {
    this.route.params.subscribe((data: any) => {
      this.getCourseById(data.courseId)
    })
  }

  ngOnInit(): void {

  }

  getCourseById(courseId) {
    this.coreService.getRequest("full-courses/course/" + courseId).subscribe((result: any) => {
      this.course = result
      this.course.courseIncludes = JSON.parse(this.course.courseIncludes)
      this.course.courseHighlights = JSON.parse(this.course.courseHighlights)
    })
  }

}
