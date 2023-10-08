import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productData:any[],term:string){
    return productData.filter( (ite) => ite.title.toLowerCase().includes(term.toLowerCase()))
  }

}
