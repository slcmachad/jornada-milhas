import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent {

  cadastroForm: FormGroup<any>;

  nascimento: MatDatepickerPanel<MatDatepickerControl<any>,any,any>;

}
