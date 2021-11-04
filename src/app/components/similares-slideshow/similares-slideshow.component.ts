import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-similares-slideshow',
  templateUrl: './similares-slideshow.component.html',
  styleUrls: ['./similares-slideshow.component.css']
})
export class SimilaresSlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  constructor() { }

  ngOnInit(): void {
     console.log(this.movies);
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

}
