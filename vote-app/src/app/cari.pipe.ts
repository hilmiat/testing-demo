import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cari'
})
export class CariPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]) {
    let namacari = args[0] as string;
    if(!args[0] || namacari == '') return value;
    return value.filter((item: any) => {
      return item.nama.toLowerCase().includes(namacari.toLowerCase());
    });
  }

}
