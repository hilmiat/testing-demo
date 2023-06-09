import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    //cek apakah value ada  atau tidak, jika tidak ada maka return null
    if(!value)
      return null;
    // jika ada maka return value yang sudah diubah menjadi title case
    return (value as string).replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));
  }

}
