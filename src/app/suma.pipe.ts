import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suma',
  pure: false

})
export class SumaPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    let sum = value.reduce((a, b) => a + b[args], 0);
    return sum;
  }

}
