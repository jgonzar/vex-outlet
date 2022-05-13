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

  img1 : string = "../../../assets/img/home-hero.jpg";
  img2 : string = "../../../assets/img/home-hero2.jpg";
  img3 : string = "../../../assets/img/home-hero3.jpg";

  slides = [] = [
    {
      img : this.img1,
      title : "Flash sale",
      link : "Learn more"
      
    },
    {
      img : this.img2,
      title : "Flash sale",
      link : "Learn more"
      
    },
    {
      img : this.img3,
      title : "Flash sale",
      link : "Learn more"
    }
    // this can be bettet ill be back *terminator eyes*
  ];

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  ngOnInit(): void {
  }
}

