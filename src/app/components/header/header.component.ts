import { Component, OnInit } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faCircleQuestion} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {

   }
  //  needs work
  // nav icons
    isActive = false;

    toggleActive(){
      this.isActive = !this.isActive;
      console.log("i got clicked");
    }

    // sidemenu
    openSidemenu(){
      const sideMenu = document.getElementById("mySideMenu");
      sideMenu!.style.width = "60%";
      sideMenu!.classList.add("dark-overlay");

    }

    closeSidemenu(){
      const sideMenu = document.getElementById("mySideMenu");
      sideMenu!.style.width = "0";
      sideMenu!.classList.remove("dark-overlay");
    }

    // notiffication tooltip
   
    // home page icons
    faHouse = faHouse;
    faList = faList;
    faMagnifyingGlass = faMagnifyingGlass;
    faUser = faUser;
    faBell = faBell;
    faShoppingCart = faShoppingCart;
    faHeart = faHeart;
    faCircleQuestion = faCircleQuestion;
    faXmark = faXmark;

    public isMenuCollapsed = true

  ngOnInit(): void {
  }

}
