import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from './../pessoa.service';
import { ValidarCamposService } from './../../shared/components/campos/validar-campos.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray,FormControl, Validators} from '@angular/forms';
import { format } from 'url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.css']
})
export class CadastrarPessoaComponent implements OnInit {

  valor;
  desabilitarBotaorSalvarPessoa: boolean = false;
  cadastro: FormGroup;
  contatos = new FormArray([]);
  contatoFormGroup: FormGroup;
  nascimentoAux: String;

  constructor(
    public validacao: ValidarCamposService,
    private fb: FormBuilder,
    private pessoaService: PessoaService,
    private router: Router) {
    }

  get controleInput(){
    return this.cadastro.controls;
  }
  get controleInputContato(){
    return this.contatoFormGroup.controls;
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
        Validators.minLength(5),
        Validators.maxLength(40)
      ]],
      bairro: ['', [
        Validators.maxLength(40)
      ]],
      cidade: ['', [
        Validators.maxLength(40)
      ]],
      estado: ['', [
        Validators.maxLength(20)
      ]],
      cep: ['', [
        Validators.minLength(8)
      ]]
    });



    this.contatoFormGroup = this.fb.group({
      tipo: ['', [
        Validators.required
      ]],
      valor: ['', [
        Validators.required
      ]],

    });

    this.addContato();

  }

  resetar(): void{
    this.cadastro.reset;
  }


  getValorTipo(){
    console.log(this.valor);
  }

  salvar(): void{

    this.desabilitarBotaorSalvarPessoa = true;

    this.validarPessoa();

    if(this.cadastro.valid && this.contatoFormGroup.valid){

      this.validarNascimento();

      this.pessoaService.save(this.cadastro.value).subscribe({
        next: pessoa => {
          console.log('pessoa salva com sucessso ', pessoa);
          alert("Pessoa adicionada com sucesso!");
          this.router.navigate(['/pessoas/listar']);
          this.desabilitarBotaorSalvarPessoa = false;
        },
        error: err => {
          alert(err.error.message);
          this.desabilitarBotaorSalvarPessoa = false;
        }
      });
    }else{
      this.desabilitarBotaorSalvarPessoa = false;
    }
  }

  addContato() {
    this.contatoFormGroup = new FormGroup({
      tipo: new FormControl(''),
      valor: new FormControl('')
    });
    this.contatos.push(this.contatoFormGroup);
  }

  createFormGroup() {
    return this.fb.group({
      tipo: [""],
      valor: [""],
    });
  }

  removerContato(index: number) {
    this.contatos.removeAt(index);
  }

  validarPessoa(){
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid){
      this.desabilitarBotaorSalvarPessoa = false;
      return;
    }
  }

  validarNascimento(){
    if (this.cadastro.value.nascimento.length < 12){
      var mydate = this.stringToStringISODate(this.cadastro.value.nascimento,"dd/MM/yyyy","/");
      this.cadastro.value.nascimento = mydate;
      this.cadastro.value.contatos =this.contatos.value;
    }
  }

  stringToStringISODate(_date,_format,_delimiter)
  {
      var formatLowerCase=_format.toLowerCase();
      var formatItems=formatLowerCase.split(_delimiter);
      var dateItems=_date.split(_delimiter);
      var monthIndex=formatItems.indexOf("mm");
      var dayIndex=formatItems.indexOf("dd");
      var yearIndex=formatItems.indexOf("yyyy");
      var month=parseInt(dateItems[monthIndex]);
      month-=1;
      var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
      return formatedDate.toISOString();

  }
}
