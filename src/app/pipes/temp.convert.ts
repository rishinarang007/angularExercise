import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'convertTemp'
})
export class TempConvert implements PipeTransform {
  transform(value: any, unit: string): number {
    console.log(value, unit);
    switch (unit) {
        case 'f':
          return Math.round((value - 273.15) * 9 / 5 + 32);
          break;
        case 'c':
          return Math.round(value - 273.15);
          break;
        default:
         return Math.round((value - 273.15) * 9 / 5 + 32);
      }
  }
}

export const tempConvertPipeInjectables: Array<any> = [
    TempConvert
];
