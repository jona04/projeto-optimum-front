import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from './../pessoa.service';
import { ValidarCamposService } from './../../shared/components/campos/validar-campos.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.css']
})
export class CadastrarPessoaComponent implements OnInit {

  cadastro: FormGroup;
  contatos = new FormArray([]);

  constructor(
    public validacao: ValidarCamposService,
    private fb: FormBuilder,
    private pessoaService: PessoaService) {
    }

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
        Validators.minLength(11),
      ]],
      nascimento: ['', [
        Validators.required,
        Validators.minLength(8)
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
        Validators.minLength(8)
      ]]
    });

    this.addContato();
  }

  resetar(): void{
    this.cadastro.reset;
  }

  salvar(): void{
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid){
      return;
    }
    console.log(this.contatos.value);

    let z = Object.assign(this.cadastro.value, this.contatos.value);
    console.log(z);
    alert("Sucesso " + JSON.stringify(this.cadastro.value, null, 4));

    // this.pessoaService.save(this.cadastro.value).subscribe({
    //   next: pessoa => console.log('pessoa salva com sucessso ', pessoa),
    //   error: err => console.log("error: ", err)
    // });
  }

  addContato() {
    const group = new FormGroup({
      tipo: new FormControl(''),
      valor: new FormControl('')
    });
    this.contatos.push(group);
  }
  removerContato(index: number) {
    this.contatos.removeAt(index);
  }
}
