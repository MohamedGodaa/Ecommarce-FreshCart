import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _CartService:CartService){}
  numOfCart:number = 0
  cartData:any= {}
  ngOnInit(): void {
      this._CartService.getCart().subscribe({
        next:(response)=>{

          this.numOfCart = response.numOfCartItems
          this.cartData = response.data;
          console.log(response);
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }

  removeItem(id:string){
    this._CartService.removeProduct(id).subscribe({
      next:(response)=>{
        this._CartService.cartNumber.next(response.numOfCartItems)
        this.numOfCart = response.numOfCartItems
        this.cartData = response.data;
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  clearCart(){
    this._CartService.removeCart().subscribe({
      next:(response)=>{
        this._CartService.cartNumber.next(0)
        this.numOfCart = 0
        this.cartData = {}
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  updateCount(id:string,count:number):void{
    if(count >= 1){
      this._CartService.updataCart(id,count).subscribe({
        next:(response)=>{
          this._CartService.cartNumber.next(response.numOfCartItems)
          this.numOfCart = response.numOfCartItems
          this.cartData = response.data;
          console.log(response);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
    }

}
