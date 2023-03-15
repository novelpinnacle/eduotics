import { Component, OnInit } from '@angular/core';
import { FrontEndService } from 'src/app/services/frontEnd.service';

interface Statistics{
  title:string
  value:string
  imagePath:String  
}

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  statistics:Statistics[]

  constructor(private frontEndService: FrontEndService) { }

  ngOnInit(): void {
    this.frontEndService.getStatistics().subscribe((statistics: Statistics[]) => {
      this.statistics = statistics
    })
  }

}
