import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPrice',
  pure: true
})
export class SortPricePipe implements PipeTransform {

  transform(value, order: boolean): any {
   console.log(order);
function mySort(a, b) {
return order ? a.price - b.price : b.price - a.price ;
}
    return value.sort(mySort);
  }

}
