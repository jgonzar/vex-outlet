import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



// import { subscribeOn } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  faXmark = faXmark;
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;

  // products
  products: Product[] = [];
  // home featured
  featuredProducts:Product[] = [];
  dfeaturedProducts:Product[] = [];

  // product data from product component
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

  actualPrice:number = 0;

  averageRating: any = 0;

  filled:boolean = false;

  // favorite icons
  toggleClass() {
    this.filled = !this.filled;
    console.log("i got clicked");
  }


  //
  // detail
  // shopping cart
  myShoppingCart:Product[] = [];
  total: any = 0;

  closeDetail(){
    const productDetail = document.getElementById("product-detail");
    productDetail!.style.width = "0";
    productDetail!.classList.remove("dark-overlay");
  }

  selectedProduct = {} as any;

  hasDiscount(){
    if(this.selectedProduct.hasDiscount === true){
        this.actualPrice = ((this.selectedProduct.price * this.selectedProduct.discount)/100);
    }else{
      this.actualPrice = this.selectedProduct.price;
    }
  }

  detailStatus: 'loading' | 'success' | 'error' | 'init' = 'init';

  onShowDetail(id:number){
    this.detailStatus = 'loading';
    this.productsService.getAllProducts().subscribe(data =>{
      this.products = data;
      let product = data[id - 1];
      this.selectedProduct = product;
      this.hasDiscount();
      this.detailStatus = 'success';
    })
  }

  onAddedShoppingCart(product:Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
    console.log(this.total);
  }

  // add to cart

  @Output () addedProduct = new EventEmitter<Product>();

  addDetailedProduct(){
    this.myShoppingCart.push(this.selectedProduct);
    this.total = this.storeService.getDetailedTotal();
  }

  @Output () showProduct = new EventEmitter<number>();


  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
   }

  ngOnInit(): void {
    // data request
    this.productsService.getAllProducts()
    .subscribe(data =>{
      this.products = data;
      this.featuredProducts = this.products.slice(0,4);
      this.dfeaturedProducts = this.products.slice(0,6);
    })
  }
}
