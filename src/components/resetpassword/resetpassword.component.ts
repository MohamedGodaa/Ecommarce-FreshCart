import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent {

  constructor(private _AuthService:AuthService,private _Router:Router){}

  errorMsg:string = '';
  isLoading:boolean = false;

  resertForm:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    newPassword:new FormControl('',[Validators.required,Validators.pattern(/^\w{6,}$/)])
  })

  resetPassword():void{
    this.isLoading =true;
    this._AuthService.resetPassword(this.resertForm.value).subscribe({
      next:(response)=>{
        this.isLoading =false;
        console.log(response);
        this._Router.navigate(['/home'])
      },
      error:(err)=>{
        console.log(err);
        this.errorMsg = err.error.message
        this.isLoading =false;
      }
    })
  }
}
