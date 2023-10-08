import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { ApidataService } from 'src/services/apidata.service';
import { CartService } from 'src/services/cart.service';
import { WishlistService } from 'src/services/wishlist.service';

@Component({
  selector: 'app-product-detalies',
  templateUrl: './product-detalies.component.html',
  styleUrls: ['./product-detalies.component.scss']
})
export class ProductDetaliesComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute ,
     private _ApidataService:ApidataService,
     private _CartService:CartService,
     private _ToastrService:ToastrService,
     private _WishlistService:WishlistService,
     private _Renderer2:Renderer2
     ){}
  productId:any;
  productData:any = {}
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(param)=> {
            this.productId = param.get('id')
        },
      })
      this._ApidataService.getDetalies(this.productId).subscribe({
        next:(response)=>{
          console.log(response.data);
          this.productData = response.data
        }
      })
  }
  productCarousel: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:3000,
    navText: ['', ''],
    items:1,
    nav: false
  }
  addCart(id:string):void {
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message)
        this._CartService.cartNumber.next(response.numOfCartItems)
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  addWish(id:string,element:HTMLSpanElement):void{
    this._WishlistService.addWishList(id).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message)
        this._Renderer2.addClass(element,'text-danger')
        console.log(response);
      }
    })
  }
}
