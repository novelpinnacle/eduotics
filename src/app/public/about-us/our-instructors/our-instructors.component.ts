import { Component, OnInit } from '@angular/core';
import { FrontEndService } from 'src/app/services/frontEnd.service';

interface Instructor {
  id: number
  name: string
  subject: string
  imagePath: string
}

@Component({
  selector: 'our-instructors',
  templateUrl: './our-instructors.component.html',
  styleUrls: ['./our-instructors.component.css']
})
export class OurInstructorsComponent implements OnInit {

  instructors: Instructor[]

  constructor(private frontEndService: FrontEndService) { }

  ngOnInit(): void {
    this.frontEndService.getOurInstructors().subscribe((instructors: Instructor[]) => {
      this.instructors = instructors
    })
  }

}
