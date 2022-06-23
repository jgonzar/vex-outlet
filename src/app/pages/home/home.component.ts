import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // home featured
  featuredProducts: Product[] = [];
  dfeaturedProducts: Product[] = [];

  products: Product[] = [];


  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    // data request
    this.productsService.getAllProducts()
    .subscribe(data =>{
      this.products = data;
      this.featuredProducts = this.products.slice(0, 4);
    })
  }

  onLoadMore(){
    this.productsService.getAllProducts()
   .subscribe(data =>{
      this.products = data;
      this.featuredProducts = this.products.slice(0, 6);
    })
  }
}
