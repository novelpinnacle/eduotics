import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'teaching-system',
  templateUrl: './teaching-system.component.html'
})
export class TeachingSystemComponent implements OnInit {

  @Input() circle: { active: string }

  constructor() { }

  ngOnInit(): void {
  }

  changeCircle(circle) {
    this.circle.active = circle
  }

}
