import { ValidarCamposService } from './../validar-campos.service';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html'
})
export class InputTextComponent{

  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl{
    return this.formGroup.controls[this.controlName];
  }

}
