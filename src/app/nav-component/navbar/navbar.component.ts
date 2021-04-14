import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    $(window).scroll(function() {
      if (!document.querySelector('.show_list')) {
        if ($(document).scrollTop() > 50) {
          $('.nav').addClass('affix');
        } else {
          $('.nav').removeClass('affix');
        }
      }
    });

    $('.navTrigger').click(function () {
      $(this).toggleClass('active');
      $('.nav').addClass('affix');
      $("#mainListDiv").toggleClass("show_list");
      $("#mainListDiv").fadeIn();
    });
  }

  toggleNav() {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $('.nav').addClass('affix');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
  }

}
