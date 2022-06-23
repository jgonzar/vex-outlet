import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
export class ProductsComponent{

  // icons
  faXmark = faXmark;
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;

  // products
  @Input () products: Product[] = [];

  // home featured
  @Input () featuredProducts:Product[] = [];
  @Input () dfeaturedProducts:Product[] = [];

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

  averageRating: any = 0;

  filled:boolean = false;

  // favorite icons
  toggleClass() {
    this.filled = !this.filled;
    console.log("i got clicked");
  }

  closeDetail(){
    const productDetail = document.getElementById("product-detail");
    productDetail!.style.width = "0";
    productDetail!.classList.remove("dark-overlay");
  }

  selectedProduct = {} as any;

  actualPrice:number = 0;

  hasDiscount(){
    if(this.selectedProduct.hasDiscount === true){
        this.actualPrice = ((this.selectedProduct.price * this.selectedProduct.discount)/100);
    }else{
      this.actualPrice = this.selectedProduct.price;
    }
  }

  detailStatus: 'loading' | 'success' | 'error' | 'init' = 'init';

  @Output () showProduct = new EventEmitter<number>();

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

  // shopping cart
  myShoppingCart:Product[] = [];
  total: any = 0;

  onAddedShoppingCart(product:Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
    console.log(this.total);
  }

  @Output () addedProduct = new EventEmitter<Product>();

  addDetailedProduct(){
    this.myShoppingCart.push(this.selectedProduct);
    this.total = this.storeService.getDetailedTotal();
  }
//

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
   }

  limit = 0;
  offset = 0;

  @Output () loadMore = new EventEmitter();

  onLoadMore(){
    this.loadMore.emit();
  //  this.productsService.getProductsByPage(this.limit, this.offset)
  //  .subscribe(data =>{
  //     this.products = this.products.concat(data);
  //     this.offset += (this.limit - 2);
  //   })
  }

  ngOnInit():void {

  }
  // ngOnInit(): void {
  //   // data request
  //   this.productsService.getAllProducts()
  //   .subscribe(data =>{
  //     this.products = data;
  //     this.featuredProducts = this.products.slice(0,4);
  //     this.dfeaturedProducts = this.products.slice(0,6);
  //   })
  // }
}
