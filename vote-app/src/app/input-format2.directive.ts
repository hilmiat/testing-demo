import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputFormat2]'
})
export class InputFormat2Directive implements OnInit {
  @HostBinding('style.backgroundColor') bg:string = 'red';
  @HostListener('mouseenter') onmouseenter(){
    this.bg = 'green';
  }
  @HostListener('mouseleave') onmouseleave(){
    this.bg = 'red';
  }
  constructor(private elemen:ElementRef,private renderer:Renderer2) { }
  //ketika di buat directive ini, maka akan dijalankan fungsi ini
  ngOnInit(): void {
    this.renderer.setStyle(this.elemen.nativeElement,'background-color','yellow');
  }

}
