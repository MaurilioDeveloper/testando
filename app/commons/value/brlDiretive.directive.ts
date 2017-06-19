import { BrlPipe } from './brlpipe';
import { Directive, HostListener, ElementRef, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Directive({ selector: "[brlformater]" })
export class BrlDirective implements OnInit {

  private el: any;
  @Output() ngModelChange = new EventEmitter();

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: BrlPipe
  ) {
    this.el = this.elementRef.nativeElement;

  }

  ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value);
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    // this.el.value = this.currencyPipe.parse(value); // opossite of transform
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = this.currencyPipe.transform(value);
    // this.ngModelChange.emit(this.el.value);
    // console.log(this.el.value);
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    console.log($event.target.value);
    this.ngModelChange.emit($event.target.value);
    // $event.target.value = valor;
  }

}


