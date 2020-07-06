import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'convertMilesToKM'
})
export class MilesConvert implements PipeTransform {
  transform(value: any, unit: string): number {
    console.log(value, unit);
    switch (unit) {
        case 'm':
          return value;
          break;
        case 'k':
          return Math.round(value * 1.609);
          break;
        default:
         return value;
      }
  }
}

export const milesConvertPipeInjectables: Array<any> = [
    MilesConvert
];
