import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart:Product[] = [];
  total:number = 0;
  detailedTotal:number = 0;

  constructor(){ }

  addProduct(product:Product){
    this.myShoppingCart.push(product);
  }
  getShoppingCart(){
    return this.myShoppingCart;
  }
  getTotal(){
     this.total = this.myShoppingCart.reduce((sum, item)=>sum + item.price,0);
     return this.total.toFixed(2);
  }
  getDetailedTotal(){
    this.total = this.myShoppingCart.reduce((sum, selectedProduct)=>sum + selectedProduct.price, 0);
    return this.total.toFixed(2);
 }
}
