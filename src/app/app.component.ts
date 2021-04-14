import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  onScroll(event: any) {
    console.log(event.target.scrollTop);
  }

  onClick(): void {
    document.querySelector('.page-wrapper').scrollIntoView({
      behavior: 'smooth'
    });
    console.log(document.documentElement.scrollTop)
  }

}
