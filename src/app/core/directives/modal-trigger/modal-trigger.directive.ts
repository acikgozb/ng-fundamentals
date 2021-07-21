import {Directive, ElementRef, Inject, OnInit} from '@angular/core';
import {JQUERY_TOKEN} from "../../jquery/j-query.service";

@Directive({
  selector: '[modalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private elementDOM: HTMLElement;

  constructor(
    @Inject(JQUERY_TOKEN)
    private jQuery: any,
    private elementRef: ElementRef
  ) {
    this.elementDOM = elementRef.nativeElement;
  }

  ngOnInit() {
    this.elementDOM.addEventListener("click", e => {
      this.jQuery("#simple-modal").modal("show");
    });
  }
}
