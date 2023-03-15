import { Component, OnInit } from '@angular/core';
import Config from 'src/app/Config';
import { CoreService } from 'src/app/services/core.service';

interface Course {
  id: string,
  name: string,
  lessons: number,
  duration: string,
  enrolled: number,
  link: string,
  image: string
}

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses = []

  constructor(
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses() {
    this.coreService.getRequest("full-courses/for-eduotics").subscribe((result: any) => {
      this.courses = result
    })
  }

}
