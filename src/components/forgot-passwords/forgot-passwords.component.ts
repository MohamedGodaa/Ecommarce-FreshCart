import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApidataService } from 'src/services/apidata.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-forgot-passwords',
  templateUrl: './forgot-passwords.component.html',
  styleUrls: ['./forgot-passwords.component.scss']
})
export class ForgotPasswordsComponent {
  constructor(private _AuthService:AuthService,
    private _Router:Router
    ){}

  errorMsg:string = '';
  isLoading:boolean = false;

  verifyEmail:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email])
  })

  getCode():void{
    this.isLoading =true;
    this._AuthService.forGetPassword(this.verifyEmail.value).subscribe({
      next:(response)=>{
        this.isLoading =false;
        console.log(response)
        this._Router.navigate(['/verifycode'])
      },
      error:(err)=>{
        this.isLoading =false;
        this.errorMsg = err.error.message
        console.log(err)
      }
    })
  }
  
}
