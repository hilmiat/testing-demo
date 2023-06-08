import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input() format:string = 'uppercase';

  @HostListener('focus') onFocus() {
    console.log('on Focus');
  }
  @HostListener('blur') onBlur() {
    //membaca text yang diinputkan
    let value: string = this.elemen.nativeElement.value;
    if(this.format == 'lowercase'){
      //ubah menjadi lowercase
      this.elemen.nativeElement.value = value.toLowerCase();
    }else{
      //ubah menjadi uppercase
      // this.elemen.nativeElement.value = value.toUpperCase();
      this.renderer.setValue(this.elemen.nativeElement,value.toUpperCase());
    }
    this.renderer.setValue(this.elemen.nativeElement,value.toUpperCase());

  }

  constructor(private elemen: ElementRef,private renderer:Renderer2) { }

}
