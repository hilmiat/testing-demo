import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usia'
})
export class UsiaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(!value) return 0;
    let tanggalLahir = new Date(value as string);
    let tahunLahir = tanggalLahir.getFullYear();
    let tahunSekarang = new Date().getFullYear();
    //return usia sampai bulan dan hari
    return tahunSekarang - tahunLahir + ' tahun ' 
      + (new Date().getMonth() - tanggalLahir.getMonth()) + ' bulan ' 
      + (new Date().getDate() - tanggalLahir.getDate()) + ' hari';
    // return tahunSekarang - tahunLahir;
  }

}
