import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-base-layout',
  templateUrl: './public-base-layout.component.html',
  styleUrls: ['./public-base-layout.component.css']
})
export class PublicBaseLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onActivate(){
    document.body.scrollTop = 0
  }

}
