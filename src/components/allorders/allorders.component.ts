import { Component, OnInit } from '@angular/core';
import { ApidataService } from 'src/services/apidata.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit {
  constructor(private _AuthService:AuthService,private _ApidataService:ApidataService){}
  userId:any;
  totalOrders:any[]=[]
  ngOnInit(): void {
      this._AuthService.decodeUser();
      this.userId = this._AuthService.userData.id
      this._ApidataService.getUserOrders(this.userId).subscribe({
        next:(respose)=>{
          this.totalOrders = respose
          console.log(respose);
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }
}
