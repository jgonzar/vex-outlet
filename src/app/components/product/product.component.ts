import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
      rating:[]
  };

  @Output () addedProduct = new EventEmitter<Product>();
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
  faStar = faStar;

  actualPrice:number = 0;

  averageRating: any = 0;

  filled:boolean = false;
  // favorite icons
  toggleClass() {
    this.filled = !this.filled;
    console.log("i got clicked");
  }

  hasDiscount(){
    if(this.product.hasDiscount === true){
        this.actualPrice = ((this.product.price * this.product.discount)/100);
    }else{
      this.actualPrice = this.product.price;
    }
  }

  constructor() {

  }

  ngOnInit(): void {
    this.hasDiscount();
  }

  // add to cart
  addToCart(){
    this.addedProduct.emit(this.product)
  }
}
