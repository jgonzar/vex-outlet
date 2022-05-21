import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() {

   }

  categories = [] = [
    {
      name:`All
     women`,
    },
    {
      name:`New
    Collection`,
    },
    {
      name:"Activewear",
    },{
      name:"Luxury"
    },
    {
      name:"Swimwear"
    },
    {
      name:"Casual"
    }
  ];


  mCategories = this.categories.slice(0, 3);
  tCategories = this.categories.slice(0, 4);
  dCategories = this.categories.slice(0, 6);

  faChevronRight = faChevronRight;

//   windowWidth:number = 0;
//   width:number = window.innerWidth;

//   @HostListener('window:resize', ['$event'])
// onResize(event:any) {
//    this.windowWidth = event.target.innerWidth;
// }

  ngOnInit(): void {
    
  }
}
