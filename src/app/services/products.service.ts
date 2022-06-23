import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/product.model';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://jgonzar.github.io/data/products.json';

  constructor(
    private http: HttpClient
  ) { }

    getAllProducts(){
      return this.http.get<Product[]>(this.apiUrl).pipe(retry(3));
    }

    getProductsByPage(limit:number, offset:number){
      return this.http.get<Product[]>(this.apiUrl, {
        params:{limit, offset}
      }).pipe(retry(3));;
    }
}
