import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ai-based-learning',
    templateUrl: './ai-based-learning.component.html',
    standalone: false
})
export class AiBasedLearningComponent implements OnInit {

  @Input() circle:{active:string}

  constructor() { }

  ngOnInit(): void {
  }

  changeCircle(circle){
    this.circle.active = circle
  }
}
