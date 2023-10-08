import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/services/cart.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  constructor(private _FormBuilder:FormBuilder,private _CartService:CartService,private _ActivatedRoute:ActivatedRoute){}
  cartId:any ;
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(parm)=>{
          this.cartId = parm.get('id')
        }
      })
  }
  checkForm:FormGroup = this._FormBuilder.group({
    details:[''],
    phone:[''],
    city:['']
  })

  handleForm(){
    this._CartService.paymentCart(this.cartId,this.checkForm.value).subscribe({
      next:(response)=>{
        window.open(response.session.url ,'_self')
        localStorage.setItem('User_id',response.client_reference_id)
        console.log(response);
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
