import { Component, OnInit, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Categorie } from 'src/app/intet-face-data';
import { ApidataService } from 'src/services/apidata.service';
import { CartService } from 'src/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/services/wishlist.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _ApidataService:ApidataService,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
    private _WishlistService:WishlistService,
    private _Renderer2:Renderer2
    ){}
  
  
  CategoriesCarousel:Categorie[]=[];


  productData:any[] = [];

  termInput:string ='';

  pageSize:number = 0 ;

  curentPage:number = 1;

  totalItem:number = 0;


  ngOnInit(): void {
      this._ApidataService.getProduct().subscribe({
        next:(response)=>{
          console.log(response.data)
          this.productData = response.data ;
          this.pageSize = response.metadata.limit;
          this.curentPage = response.metadata.currentPage;
          this.totalItem =response.results
        },
        error:(err)=>{
          console.log(err)
        }
      })

      this._ApidataService.getCategoriesCarousel().subscribe({
        next:(response)=>{
          this.CategoriesCarousel = response.data
        }
      })
  }

  pageChanged(event:any):void{
    this._ApidataService.getProduct(event).subscribe({
      next:(response)=>{
        this.productData = response.data ;
        this.pageSize = response.metadata.limit;
        this.curentPage = response.metadata.currentPage;
        this.totalItem =response.results
      }
  })
}
  categorieCarousel: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        dots:true,
        nav: false
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  homeCarousel: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    // autoplayTimeout:300,
    navText: ['', ''],
    items:1,
    nav: true
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
