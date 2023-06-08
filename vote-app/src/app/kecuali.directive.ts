import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appKecuali]'
})
export class KecualiDirective {
  @Input('appKecuali') set kecuali(condition:boolean){
    if(!condition){
      this.container.createEmbeddedView(this.template);
    }else{
      this.container.clear();
    }
  }

  constructor(private template:TemplateRef<any>,private container: ViewContainerRef) { }

}
