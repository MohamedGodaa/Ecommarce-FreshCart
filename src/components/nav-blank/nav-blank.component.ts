import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'angular-dark-mode';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {
  constructor(private _Router:Router,private _CartService:CartService,private _DarkModeService:DarkModeService){}

  cartNum:number = 0

  ngOnInit(): void {
      this._CartService.cartNumber.subscribe({
        next:(data)=>{
          this.cartNum = data
        }
      })
      this._CartService.getCart().subscribe({
        next:(response)=>{
          this.cartNum = response.numOfCartItems
        }
      })
  }

  onToggle(): void{
    this._DarkModeService.toggle()
  }

  
  signOut(){
    localStorage.removeItem('_token');
    this._Router.navigate(['login'])
  }
}
