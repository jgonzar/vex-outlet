import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-to-top-btn',
  templateUrl: './back-to-top-btn.component.html',
  styleUrls: ['./back-to-top-btn.component.scss']
})
export class BackToTopBtnComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
  faArrowUp = faArrowUp;

  windowScrolled = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }
}
