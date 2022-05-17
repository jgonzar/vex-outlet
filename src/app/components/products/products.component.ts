import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // productImg1 = ;
  // productImg2 = ;
  // productImg3 = ;
  // productImg4 = "";
  // productImg5 = "";
  // productImg6 = "";
  // productImg7 = "../../../assets/img/clothing7.jpg";
  // productImg8 = ;

  products: Product[] = [
    {
      id:1,
      img:"../../../assets/img/clothing1.jpg",
      name:"DKNY t-shirt - colour block front logo",
      price:19.99,
      prevprice:69.99,
      discount:60,
      category:"shirts"
    },
    {
      id:2,
      img:"../../../assets/img/clothing2.jpg",
      name:"Polo Ralph Lauren jacket - light blue",
      price:79.99,
      prevprice:133,
      discount:60,
      category:"shirts"
    },
    {
      id:3,
      img:"../../../assets/img/clothing3.jpg",
      name:"Blazer dress with buttons long sleeve..",
      price:59.99,
      prevprice:120,
      discount:50,
      category:"jackets"
    },
    {
      id:4,
      img:"../../../assets/img/clothing4.jpg",
      name:"Midi dress with buttons short sleeve - pink",
      price:59.99,
      prevprice:120,
      discount:50,
      category:"dress"
    },
    {
      id:5,
      img:"../../../assets/img/clothing5.jpg",
      name:"Moschnio checkerboard heart dress - blue",
      price:99.99,
      prevprice:200,
      discount:50,
      category:"dress"
    },
    {
      id:6,
      img:"../../../assets/img/clothing6.jpg",
      name:"Tommy Hilfiger padded jackets - black with...",
      price:54.99,
      prevprice:110,
      discount:50,
      category:"jackets"
    },
    {
      id:7,
      img:"../../../assets/img/clothing7.jpg",
      name:"Calvin Klein - lounge hoody with drawstring..",
      price: 45.99,
      prevprice:115,
      discount:60,
      category:"sweaters"
    },
    {
      id:8,
      img:"../../../assets/img/clothing8.jpg",
      name:"YSL cotton jumper - kashmir - beige ",
      price:131.99,
      prevprice:330,
      discount:60,
      category:"sweaters"
    },
  ];

  featuredProducts = [] = [
    this.products[0],
    this.products[1],
    this.products[2],
    this.products[3]
  ];

  constructor() {

   }

  ngOnInit(): void {
  }

}
