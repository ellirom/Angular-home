import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(value, searchProduct: string): any {
    console.log(searchProduct);
    if (!searchProduct){
      return value;

    }
    return value.filter((item) => item.name.includes(searchProduct))  ;
  }

}
