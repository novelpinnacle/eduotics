import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'live-class-room',
    templateUrl: './live-class-room.component.html',
    standalone: false
})
export class LiveClassRoomComponent implements OnInit {

  @Input() circle:{active:string}

  constructor() { }

  ngOnInit(): void {
  }

  changeCircle(circle){
    this.circle.active = circle
  }

}
