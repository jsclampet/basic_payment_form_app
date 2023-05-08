import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    //if nothing is entered in input, then do show empty string, aka nothing
      //this avoids "NaN" output
    if (!value) {
      return '';
    }

    //
    switch (targetUnits){
      case 'km': // kilometers
        return value * 1.60934;
      case 'm': // meters
        return value * 1.60934 * 1000;
      case 'cm': // centimeters
        return value * 1.60934 * 1000 * 1000;
      default:
        throw new Error(`
          Target unit is not supported...
          Please choose a valid argument for "convert" pipe!
        `);
    }    
  }

}
