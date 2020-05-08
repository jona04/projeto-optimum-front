import { ValidarCamposService } from './../../shared/components/campos/validar-campos.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.css']
})
export class CadastrarPessoaComponent implements OnInit {

  cadastro: FormGroup;

  constructor(public validacao: ValidarCamposService,
              private fb: FormBuilder) {}

  get controleInput(){
    return this.cadastro.controls;
  }

  ngOnInit() {
    this.cadastro = this.fb.group({
      nome: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40)
      ]],
      cpf: ['', [
        Validators.required,
        Validators.maxLength(11)
      ]],
      nascimento: ['', [
        Validators.required,
        Validators.maxLength(10)
      ]],
      endereco: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(40)
      ]],
      bairro: ['', [
        Validators.required,
        Validators.maxLength(40)
      ]],
      cidade: ['', [
        Validators.required,
        Validators.maxLength(40)
      ]],
      estado: ['', [
        Validators.required,
        Validators.maxLength(2)
      ]],
      cep: ['', [
        Validators.required,
        Validators.maxLength(8)
      ]]
    });
  }

  resetar(): void{
    this.cadastro.reset;
  }

  salvar(): void{
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid){
      return;
    }

    alert("Sucesso " + JSON.stringify(this.cadastro.value, null, 4));
  }
}
