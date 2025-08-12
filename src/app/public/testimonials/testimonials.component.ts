import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { FrontEndService } from 'src/app/services/frontend.service';


interface Testimonial {
  id?: number
  name: string
  review: string
  designation: string
  imagePath: string
}

@Component({
    selector: 'testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class TestimonialsComponent implements OnInit {

  testimonials: Testimonial[] = []
  imageFolder = "assets/images/testimonials/"


  constructor(private frontEndService: FrontEndService) { }

  ngOnInit(): void {
    this.frontEndService.getTestimonials().subscribe((testimonials: Testimonial[]) => {
      this.testimonials = testimonials
      setTimeout(() => this.changed({ slides: [{ id: 't-1' }] }), 100)
    })
  }

  testimonialCarouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 0,
    navText: [`<img src="">`, `<img src="">`],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }


  getPreviousImage(index) {
    if (index == 1) {
      return this.testimonials.length
    }
    return index - 1
  }

  getNextImage(index) {
    if (index == this.testimonials.length) {
      return 1
    }
    return index + 1
  }

  changed(data: SlidesOutputData) {
    if (!data.slides[0]) {
      return
    }
    let index = +data.slides[0].id.split("-")[1]
    let prev: any = document.querySelectorAll('#testimonial-carousel .owl-prev')[0].getElementsByTagName("img")[0]
    let next: any = document.querySelectorAll("#testimonial-carousel .owl-next")[0].getElementsByTagName("img")[0]

    let prevImage = this.testimonials[this.getPreviousImage(index) - 1].imagePath
    let nextImage = this.testimonials[this.getNextImage(index) - 1].imagePath

    if (prev)
      prev.src = this.imageFolder + prevImage
    if (next)
      next.src = this.imageFolder + nextImage
  }
}
