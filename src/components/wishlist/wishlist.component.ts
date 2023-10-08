import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/services/cart.service';
import { WishlistService } from 'src/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  constructor(private _WishlistService:WishlistService,
      private _CartService:CartService,
      private _ToastrService:ToastrService
    ){}

  wishList:any[]=[]

  ngOnInit(): void {
    this._WishlistService.getWishList().subscribe({
      next:(response)=>{
        this.wishList = response.data
        console.log(response.data);
      }
    })
  }
  removeWish(_id:string):void{
    this._WishlistService.removeWishList(_id).subscribe({
      next:(response)=>{
        this._WishlistService.getWishList().subscribe({
          next:(response)=>{
            this.wishList = response.data
            console.log(response.data);
          }
        })
        
      }
    })
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

}
