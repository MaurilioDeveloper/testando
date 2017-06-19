import { Directive, HostListener, Input, EventEmitter, Output } from '@angular/core';
import { 
  NG_VALUE_ACCESSOR, ControlValueAccessor 
} from '@angular/forms';
 
@Directive({
  selector: '[omegamask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR, 
    useExisting: OmegaMaskDirective, 
    multi: true 
  }]
})
export class OmegaMaskDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;
  @Output() ngModelChange = new EventEmitter();
 
  @Input('omegamask') omegaMask: string;
 
  writeValue(value: any): void {
  }
 
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
 
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
 
  @HostListener('keyup', ['$event']) 
  onKeyup($event: any) { 
    var valor = $event.target.value.replace(/\D/g, '');
    var pad = this.omegaMask.replace(/\D/g, '').replace(/9/g, '_');
    var valorMask = valor + pad.substring(0, pad.length - valor.length);
     console.log(valor)
     console.log(valorMask)
     this.ngModelChange.emit(valor);
    // retorna caso pressionado backspace
    if ($event.keyCode === 8) {
     // this.onChange(valor);
      return;
    }

    if (valor.length <= pad.length) {
     // this.onChange(valor);
    }
 
    var valorMaskPos = 0;
    valor = '';
    
    for (var i = 0; i < this.omegaMask.length; i++) {
      if (isNaN(parseInt(this.omegaMask.charAt(i)))) {
        valor += this.omegaMask.charAt(i);
      } else {
        valor += valorMask[valorMaskPos++];
      }
    }

    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }
    $event.target.value = valor;

  }
 
  @HostListener('blur', ['$event']) 
  onBlur($event: any) {
    console.log($event.target.value.length);
    console.log(this.omegaMask.length);


    if ($event.target.value.length === this.omegaMask.length) {
      return $event.target.value;
    }
    this.onChange('');
    // $event.target.value = '';
  }
}