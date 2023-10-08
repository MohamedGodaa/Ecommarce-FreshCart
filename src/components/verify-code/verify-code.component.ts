import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  errorMsg:string = '';
  isLoading:boolean = false;

  verifyCode:FormGroup = new FormGroup({
    resetCode:new FormControl('',[Validators.required]),
  })

  verify():void{
    this.isLoading =true;
    this._AuthService.verifyResetCode(this.verifyCode.value).subscribe({
      next:(response)=>{
        this._Router.navigate(['/resetpassword'])
        this.isLoading =false;
        console.log(response)
      },
      error:(err)=>{
        this.isLoading =false;
        console.log(err);
        this.errorMsg = err.error.message
      }
    })
  }
}
