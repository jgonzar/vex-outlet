import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
// import { subscribeOn } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  // shopping cart
  private myShoppingCart:Product[] = [];
  total: any = 0;
// products
  products: Product[] = [];
  // home featured
  featuredProducts = [] as any;
  dfeaturedProducts = [] as any;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
   }
  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data =>{
      this.products = data;
      this.featuredProducts = this.products.slice(0,4);
      this.dfeaturedProducts = this.products.slice(0,6);
    })
  }
  onAddedShoppingCart(product:Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
    console.log(this.total);
  }
}
