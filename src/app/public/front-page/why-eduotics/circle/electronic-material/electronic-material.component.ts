import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'electronic-material',
    templateUrl: './electronic-material.component.html',
    standalone: false
})
export class ElectronicMaterialComponent implements OnInit {

  @Input() circle:{active:string}

  constructor() { }

  ngOnInit(): void {
  }

  changeCircle(circle){
    this.circle.active = circle
  }

}
