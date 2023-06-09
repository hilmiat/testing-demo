import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    //baca args ke 0 dan 1
    let panjang = args[0] as number;
    let tanda = args[1];
    console.log(args);
    if(!value)
      return null;
    return (value as string).substr(0, panjang) + tanda;
  }

}
