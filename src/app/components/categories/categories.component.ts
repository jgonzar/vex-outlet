import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  categories = [] = [
    {
      name:`All
     women`,
    //  img:"../../../assets/img/all-category.jpg"
    },
    {
      name:`New
    Collection`,
      // img:"../../../assets/img/new-collection-category.jpg"
    },
    {
      name:"Activewear",
      // img:"../../../assets/img/active-category.jpg"
    }
    // "Luxury",
    // "Swimwear",
    // "Casual"
  ];

  faChevronRight = faChevronRight;

  ngOnInit(): void {
  }

}
