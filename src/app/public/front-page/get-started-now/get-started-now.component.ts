import { Component, OnInit } from '@angular/core';
import { FrontEndService } from 'src/app/services/frontEnd.service';

interface GetStartedNow {
  id: number
  title: string
  description: string
  buttonText: string
  buttonLink: string
  imagePath:String
}

@Component({
    selector: 'get-started-now',
    templateUrl: './get-started-now.component.html',
    styleUrls: ['./get-started-now.component.css'],
    standalone: false
})
export class GetStartedNowComponent implements OnInit {

  getStartedNow: GetStartedNow 

  constructor(private frontEndService: FrontEndService) { }

  ngOnInit(): void {
    this.frontEndService.getGetStartedNow().subscribe((getStartedNow: GetStartedNow) => {
      this.getStartedNow = getStartedNow
    })
  }

}
