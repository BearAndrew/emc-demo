import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  offset: number = 0;

  constructor() {
    // document.addEventListener('scroll', () => {
    //   console.log('scroll' + document.getElementById('router-content').scrollTop)
    // })
  }

  onScroll(event: any) {
    console.log(event.target.scrollTop);
  }

  onClick(): void {
    document.querySelector('.page-wrapper').scrollIntoView(
      { behavior: 'smooth' } || true
    );
  }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.offset = document.documentElement.scrollTop
    // console.log(this.offset);
  }


}
