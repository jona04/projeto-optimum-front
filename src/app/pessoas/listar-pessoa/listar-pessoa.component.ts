import { PessoaService } from './../pessoa.service';

import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';



@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void{
    this.retrieveAll();
  }


  retrieveAll(): void{
    this.pessoaService.retrieveAll().subscribe({
      next: pessoas => {
        this.pessoas = pessoas;
      },
      error: err => console.log("error", err)
    });
  }


  // retrieveAll(){
  //   this.pessoas = PESSOAS
  //   return this.pessoas;
  // }


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
        valor: "jonatas.iw@gmail.com",
        tipo: "EMAIL"
      }
    ]
  }

]
