import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllordersComponent } from 'src/components/allorders/allorders.component';
import { BrandsComponent } from 'src/components/brands/brands.component';
import { CartComponent } from 'src/components/cart/cart.component';
import { CategoriesComponent } from 'src/components/categories/categories.component';
import { ForgotPasswordsComponent } from 'src/components/forgot-passwords/forgot-passwords.component';
import { HomeComponent } from 'src/components/home/home.component';
import { LoginComponent } from 'src/components/login/login.component';
import { NotFoundComponent } from 'src/components/not-found/not-found.component';
import { PaymentComponent } from 'src/components/payment/payment.component';
import { ProductDetaliesComponent } from 'src/components/product-detalies/product-detalies.component';
import { ProductsComponent } from 'src/components/products/products.component';
import { ResetpasswordComponent } from 'src/components/resetpassword/resetpassword.component';
import { SigninComponent } from 'src/components/signin/signin.component';
import { VerifyCodeComponent } from 'src/components/verify-code/verify-code.component';
import { WishlistComponent } from 'src/components/wishlist/wishlist.component';
import { authGuard } from 'src/guards/auth.guard';
import { AuthComponent } from 'src/layout/auth/auth.component';
import { BlankComponent } from 'src/layout/blank/blank.component';

const routes: Routes = [
  {path:'',component:BlankComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',canActivate:[authGuard],component:HomeComponent,title:'Home'},
    {path:'cart',canActivate:[authGuard],component:CartComponent,title:'Cart'},
    {path:'wishlist',canActivate:[authGuard],component:WishlistComponent,title:'wishlist'},
    {path:'payment/:id',canActivate:[authGuard],component:PaymentComponent,title:'payment'},
    {path:'allorders',canActivate:[authGuard],component:AllordersComponent,title:'Allorders'},
    {path:'categories',canActivate:[authGuard],component:CategoriesComponent,title:'Categories'},
    {path:'brands',canActivate:[authGuard],component:BrandsComponent,title:'Brands'},
    {path:'products',canActivate:[authGuard],component:ProductsComponent,title:'Products'},
    {path:'details/:id',canActivate:[authGuard],component:ProductDetaliesComponent,title:'Product'},
  ]},
  {path:'',component:AuthComponent,children:[
    {path:'login',component:LoginComponent,title:'Login'},
    {path:'signin',component:SigninComponent,title:'Signin'},
    {path:'forgetPassword',component:ForgotPasswordsComponent,title:'ForgetPassword'},
    {path:'verifycode',component:VerifyCodeComponent,title:'verify-code'},
    {path:'resetpassword',component:ResetpasswordComponent,title:'ResetPassword'}
  ]},
  {path:'**',component:NotFoundComponent,title:'NotFoundPage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
