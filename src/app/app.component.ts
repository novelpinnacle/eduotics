import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'Eduotics';

  constructor() {
    //this.setFontSize()
    //onresize = this.setFontSize
  }

  setFontSize() {
    let width = innerWidth
    let percent = (width / 1920);
    let size = (16 * percent).toFixed(2)
    document.getElementsByTagName("html")[0].style.fontSize = size + "px"
  }

}
