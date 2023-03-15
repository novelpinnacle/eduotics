import { Component, OnInit } from '@angular/core';
import { FrontEndService } from 'src/app/services/frontEnd.service';

interface TopCourses{
  id:number
  title:string
  link:string
  imagePath:string
}

@Component({
  selector: 'top-courses',
  templateUrl: './top-courses.component.html',
  styleUrls: ['./top-courses.component.css']
})
export class TopCoursesComponent implements OnInit {

  topCourses: TopCourses[]

  constructor(private frontEndService: FrontEndService) { }

  ngOnInit(): void {
    this.frontEndService.getTopCourses().subscribe((topCourses: TopCourses[]) => {
      this.topCourses = topCourses
    })
  }

}
