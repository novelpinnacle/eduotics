import { Component, OnInit } from '@angular/core';
import { FrontEndService } from 'src/app/services/frontEnd.service';

@Component({
    selector: 'about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css'],
    standalone: false
})
export class AboutUsComponent implements OnInit {

  toggles = []

  constructor(private frontEndService:FrontEndService) { }

  ngOnInit(): void {
    this.getToggles()
  }

  getToggles() {
    this.frontEndService.getAllToggles().subscribe((toggles: any) => {
      this.toggles = toggles
    })
  }


  isActive(sectionName) {
    let section = this.toggles.find(t => t.section == sectionName);

    if (!section) {
      return false
    }

    return section.status
  }

}
