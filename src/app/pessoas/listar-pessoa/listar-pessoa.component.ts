
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor() { }

  ngOnInit(): void{
    this.retrieveAll();
  }

  retrieveAll(){
    this.pessoas = PESSOAS
    return this.pessoas;
  }
}

var PESSOAS: Pessoa[] = [

  {
    id: 1,
    nome: "Jonatas",
    cpf: "04454360340",
    nascimento: "17/01/1993",
    endereco: "Rua Doutor Area Leao",
    bairro: "Centro",
    cidade: "Teresina",
    estado: "Piaui",
    cep: "64000310",
    contatos: [
      {
        id: 1,
        email: "jonatas.iw@gmail.com",
        telefone: "86999719767",
        skype: "jonatas.ol",
      }
    ]
  }

]
