import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare const gtag: Function;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'Eduotics';

  // constructor() {
  //   //this.setFontSize()
  //   //onresize = this.setFontSize
  // }

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-094SGDXREP', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
  

  setFontSize() {
    let width = innerWidth
    let percent = (width / 1920);
    let size = (16 * percent).toFixed(2)
    document.getElementsByTagName("html")[0].style.fontSize = size + "px"
  }

}
