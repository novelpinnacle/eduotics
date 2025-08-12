import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FrontEndService } from 'src/app/services/frontend.service';

interface Slideshow {
  id: number
  title: string
  description: string
  buttonText: string
  buttonLink: string
  imagePath
}

@Component({
    selector: 'hero-section',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class HeroComponent implements OnInit {

  slideshows: Slideshow[]

  constructor(private frontEndService: FrontEndService) { }

  ngOnInit(): void {
    this.frontEndService.getSlideshows().subscribe((slideshows: Slideshow[]) => {
      this.slideshows = slideshows
    })
  }

  // Owl Carausal Options
  heroCarouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
