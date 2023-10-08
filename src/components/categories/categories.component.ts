import { Component, OnInit } from '@angular/core';
import { ApidataService } from 'src/services/apidata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private _ApidataService:ApidataService){}

  categoriesData:any[]=[]
  ngOnInit(): void {
      this._ApidataService.getAllCategories().subscribe({
        next:(response)=>{
          this.categoriesData = response.data
          console.log(response);
        }
      })
  }
}
