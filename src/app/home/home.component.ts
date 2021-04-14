import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as AOS from 'aos';
import 'slick-carousel';
declare var anime: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready( () => {
      $('.carousel').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // dots: true,
        infinite: true,
        cssEase: 'linear',
        speed: 1500,
        fade: true,
        pauseOnHover: false,
      });
    });

    AOS.init();
  }

  ngAfterViewInit() {
    // Wrap every letter in a span
    let textWrapper = document.querySelector('.c2 .one');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    let textWrapper2 = document.querySelector('.c2 .two');
    textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

    anime.timeline({loop: true})
    .add({
      targets: '.c2 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 120*i
    }).add({
      targets: '.c2 .letter',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    }).add({
      targets: '.c2 .letter2',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 100*i
    }).add({
      targets: '.c2',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
