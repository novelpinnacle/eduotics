import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'public-header',
    templateUrl: './public-header.component.html',
    styleUrls: ['./public-header.component.css'],
    standalone: false
})
export class PublicHeaderComponent implements OnInit {
  showMenu: boolean = false;
  currentRoute: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  openSearch() {
    console.log('Search clicked');
  }
}
