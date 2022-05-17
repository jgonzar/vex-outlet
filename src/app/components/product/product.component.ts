import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  @Input () product: Product = {
    id:0,
    img:"",
    name:"",
    price:0,
    prevprice:0,
    discount:0,
    category:""
  };

  faStar = faStar;
  faHeart = faHeart;

  filled:boolean = false;

  toggleClass() {
    this.filled = !this.filled;
    console.log("i got clicked");
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
