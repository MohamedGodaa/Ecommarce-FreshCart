import { PaymentComponent } from './../components/payment/payment.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/components/home/home.component';
import { BrandsComponent } from 'src/components/brands/brands.component';
import { CartComponent } from 'src/components/cart/cart.component';
import { CategoriesComponent } from 'src/components/categories/categories.component';
import { LoginComponent } from 'src/components/login/login.component';
import { NavAuthComponent } from 'src/components/nav-auth/nav-auth.component';
import { NavBlankComponent } from 'src/components/nav-blank/nav-blank.component';
import { NotFoundComponent } from 'src/components/not-found/not-found.component';
import { ProductsComponent } from 'src/components/products/products.component';
import { SigninComponent } from 'src/components/signin/signin.component';
import { AuthComponent } from 'src/layout/auth/auth.component';
import { BlankComponent } from 'src/layout/blank/blank.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TextPipe } from './text.pipe'
import { ProductDetaliesComponent } from 'src/components/product-detalies/product-detalies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { SearchPipe } from './search.pipe';
import { AllordersComponent } from 'src/components/allorders/allorders.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyhttpInterceptor } from './myhttp.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LodingInterceptor } from './loding.interceptor';
import { WishlistComponent } from 'src/components/wishlist/wishlist.component';
import { ForgotPasswordsComponent } from 'src/components/forgot-passwords/forgot-passwords.component';
import { VerifyCodeComponent } from 'src/components/verify-code/verify-code.component';
import { ResetpasswordComponent } from 'src/components/resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    LoginComponent,
    NavAuthComponent,
    NavBlankComponent,
    NotFoundComponent,
    ProductsComponent,
    SigninComponent,
    AuthComponent,
    BlankComponent,
    FooterComponent,
    TextPipe,
    ProductDetaliesComponent,
    SearchPipe,
    PaymentComponent,
    AllordersComponent,
    WishlistComponent,
    ForgotPasswordsComponent,
    VerifyCodeComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:MyhttpInterceptor ,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LodingInterceptor ,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
