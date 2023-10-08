import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators, FormControlOptions } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  
  constructor(private _AuthService:AuthService ,private _Router:Router){}

  isLoading:boolean = false;
  errorMsg:string = '';
  signinForm:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^\w{6,}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  },{validators:[this.confirmPassword]} as FormControlOptions)


  confirmPassword(group:FormGroup):void{
    const password =group.get('password');
    const rePassword =group.get('rePassword');
    if(rePassword?.value === ''){
      rePassword.setErrors({required:true})
    }
    else if(password?.value !== rePassword?.value){
      rePassword?.setErrors({mismatch:true})
    }

  }
  handelSignin(){
    this.isLoading =true;
    if(this.signinForm.valid){
      this._AuthService.signupForm(this.signinForm.value).subscribe({
        next:(response)=>{
          console.log(response)
          this._Router.navigate(['login'])
          this.isLoading = false;
        },
        error:(err)=>{
          this.isLoading = false;
          console.log(err);
          this.errorMsg = err.error.message
          
        }
      })
    }
  }
}
