import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'convertTemp'
})
export class TempConvert implements PipeTransform {
  transform(value: any, unit: string): number {
    console.log(value, unit);
    switch (unit) {
        case 'f':
          return value;
          break;
        case 'c':
          return Math.round((value - 32) * (5 / 9));
          break;
        default:
         return value;
      }
  }
}

export const tempConvertPipeInjectables: Array<any> = [
    TempConvert
];
