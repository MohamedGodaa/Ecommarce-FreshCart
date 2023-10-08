import { Component, OnInit } from '@angular/core';
import { ApidataService } from 'src/services/apidata.service';
import { CartService } from 'src/services/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private _ApidataService:ApidataService,private _CartService:CartService,private _ToastrService:ToastrService){}
  productData:any[] = [];

  termInput:string = '';
  pageSize:number = 0 ;
  curentPage:number = 1;
  totalItem:number = 0;
  ngOnInit(): void {
    this._ApidataService.getProduct().subscribe({
      next:(response)=>{
        this.productData = response.data ;
        this.pageSize = response.metadata.limit;
          this.curentPage = response.metadata.currentPage;
          this.totalItem =response.results
      },
      error:()=>{
      }
    })
  }
  addCart(id:string):void {
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message)
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
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
}
