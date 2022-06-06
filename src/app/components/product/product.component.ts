import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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
      imgs:[''],
      img:'',
      title:'',
      price:0,
      colors:[],
      color:'',
      sizes:[],
      size:'',
      inStock:true,
      stock:0,
      categories:[''],
      description:'',
      details:``,
      hasDiscount:false,
      discount:0,
      rating:0
  };

  @Output () addedProduct = new EventEmitter<Product>();
  faStar = faStar;
  faHeart = faHeart;

  filled:boolean = false;
  // favorite icons
  toggleClass() {
    this.filled = !this.filled;
    console.log("i got clicked");
  }



  constructor() {

  }

  ngOnInit(): void {
  }

  // add to cart
  addToCart(){
    this.addedProduct.emit(this.product)
  }
}
