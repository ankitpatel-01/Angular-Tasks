import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[akIF]'
})
export class AkIFDirective {

  _akif: boolean = true;
 
  constructor(private _viewContainer: ViewContainerRef,
              private templateRef: TemplateRef<any>) {
  }
 
 
  @Input()
  set akIf(condition:boolean) {
    this._akif = condition
    this._updateView();
  }
 
  _updateView() {
    if (this._akif) {
      this._viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this._viewContainer.clear();
    }
  }

}
