import { Component, OnInit } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {

   }
  //  needs work
    isActive = false;

    toggleActive(){
      this.isActive = !this.isActive;
      console.log("i got clicked");
    }

    faHouse = faHouse;
    faList = faList;
    faHeart = faHeart;
    faUser = faUser;
    faBell = faBell;

    public isMenuCollapsed = true

  ngOnInit(): void {
  }

}
