import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
// import { FeaturedComponent } from './components/featured/featured.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackToTopBtnComponent } from './components/back-to-top-btn/back-to-top-btn.component';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Pagination } from "swiper";
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

SwiperCore.use([Pagination]);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    CategoriesComponent,
    ProductComponent,
    ProductsComponent,
    // FeaturedComponent,
    FooterComponent,
    BackToTopBtnComponent,
    HomeComponent,
    NotFoundComponent,
    CategoryComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
