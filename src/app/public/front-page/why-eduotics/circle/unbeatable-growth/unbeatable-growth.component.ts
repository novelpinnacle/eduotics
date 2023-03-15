import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'unbeatable-growth',
  templateUrl: './unbeatable-growth.component.html'
})
export class UnbeatableGrowthComponent implements OnInit {


  @Input() circle: { active: string }

  constructor() { }

  ngOnInit(): void {
  }

  changeCircle(circle) {
    this.circle.active = circle
  }

}
