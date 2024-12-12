import { Component, OnInit } from '@angular/core';
import { FrontEndService } from 'src/app/services/frontEnd.service';




interface AboutUs {
  id: number
  title: string
  description: string
  buttonText: string
  buttonLink: string
  imagePath
}

@Component({
    selector: 'about-us-main',
    templateUrl: './about-us-main.component.html',
    styleUrls: ['./about-us-main.component.css'],
    standalone: false
})
export class AboutUsMainComponent implements OnInit {

  aboutUs: AboutUs

  constructor(private frontEndService: FrontEndService) { }

  ngOnInit(): void {
    this.frontEndService.getAboutUs().subscribe((aboutUs: AboutUs) => {
      this.aboutUs = aboutUs
    })
  }
}
