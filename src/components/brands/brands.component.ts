import { Component, OnInit } from '@angular/core';
import { ApidataService } from 'src/services/apidata.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements  OnInit {
  constructor(private _ApidataService:ApidataService){}
  brandsDate:any[] = []
  ngOnInit(): void {
      this._ApidataService.getAllBrands().subscribe({
        next:(respose)=>{
          this.brandsDate = respose.data 
          console.log(respose.data);
        }
      })
  }
}
