import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMaskPhone]'
})
export class MaskPhoneDirective {


  @HostListener('input')  onInputPhone() {

    //replace(/\D/g, '') 
    //means it replace anything that is NAN to empty string i.e. it allow on number input
    let a = this.el.nativeElement.value.replace(/[^0-9]/g, '').match(/([0-9]{0,3})([0-9]{0,3})([0-9]{0,4})/);
    this.el.nativeElement.value = !a[2] ? a[1] : '(' + a[1] + ') ' + a[2] + (a[3] ? '-' + a[3] : '');
  }

  constructor(public el: ElementRef) { }

}
