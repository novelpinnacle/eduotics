import { Component, OnInit } from '@angular/core';
import { FrontEndService } from 'src/app/services/frontEnd.service';

interface AboutUsStatistics {
  id:number
  title: string
  value: string
  imagePath: string
}

@Component({
  selector: 'about-us-statistics',
  templateUrl: './about-us-statistics.component.html',
  styleUrls: ['./about-us-statistics.component.css']
})
export class AboutUsStatisticsComponent implements OnInit {


  statistics: AboutUsStatistics[]
  constructor(private frontEndService: FrontEndService) { }

  ngOnInit(): void {
    this.frontEndService.getAboutUsStatistics().subscribe((statistics: AboutUsStatistics[]) => {
      this.statistics = statistics
    })
  }

}
