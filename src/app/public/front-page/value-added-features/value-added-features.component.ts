import { Component, OnInit } from '@angular/core';
import { FrontEndService } from 'src/app/services/frontEnd.service';

interface ValueAddedFeatures{
  id:number
  title:string
  imagePath:string
  points:string[]
}

@Component({
  selector: 'value-added-features',
  templateUrl: './value-added-features.component.html',
  styleUrls: ['./value-added-features.component.css']
})
export class ValueAddedFeaturesComponent implements OnInit {

  valueAddedFeatures: ValueAddedFeatures[]

  constructor(private frontEndService: FrontEndService) { }

  ngOnInit(): void {
    this.frontEndService.getValueAddedfeatures().subscribe((valueAddedFeatures: ValueAddedFeatures[]) => {
      this.valueAddedFeatures = valueAddedFeatures
      this.valueAddedFeatures.forEach(v => {
        v.points = (v.points + "").split("~")
      })
    })
  }

}
