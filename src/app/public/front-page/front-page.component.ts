import { Component, OnInit } from '@angular/core';
import { FrontEndService } from 'src/app/services/frontend.service';

@Component({
    selector: 'front-page',
    templateUrl: './front-page.component.html',
    styleUrls: ['./front-page.component.css'],
    standalone: false
})
export class FrontPageComponent implements OnInit {

  toggles = []

  constructor(private frontEndService: FrontEndService) { }

  ngOnInit(): void {
    this.getToggles()
  }

  // toggles are to know which part of front page to show or not
  getToggles() {
    this.frontEndService.getAllToggles().subscribe((toggles: any) => {
      this.toggles = toggles
    })
  }

  // check if section is true or false so that it can be shown 
  isActive(sectionName) {
    let section = this.toggles.find(t => t.section == sectionName);
    
    if(!section){
      return false
    }

    return section.status
  }

}
