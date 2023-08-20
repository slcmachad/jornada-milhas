import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss']
})
export class SeletorPassageiroComponent implements ControlValueAccessor{

  @Input() titulo: string = '';
  @Input() subTitulo: string = '';

  value: number = 0
  onChange = () => {}
  onTouch = () => {}

  writeValue(val: any): void {
    this.value = val
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {

  }



}
