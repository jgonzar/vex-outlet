import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() {

  }

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  ngOnInit(): void {
  }

}
