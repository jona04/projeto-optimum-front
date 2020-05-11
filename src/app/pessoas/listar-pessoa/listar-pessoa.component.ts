import { PessoaService } from './../pessoa.service';

import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ListarPessoaComponent implements OnInit {

  loading: boolean = true;
  values = '';
  pessoas: Pessoa[] = [];
  pessoa: Pessoa;
  constructor(
    private pessoaService: PessoaService,
    config: NgbModalConfig,
    private modalService: NgbModal) {
      config.backdrop = 'static';
      config.keyboard = false;
               }

  ngOnInit(): void{
    this.loading = true;
    this.retrieveAll();
  }

  onKey(event: any) { // without type info
    this.values = event.target.value;
  }

  buscar(){
    this.loading = true;
    this.pessoaService.buscar(this.values).subscribe({
      next: pessoas => {
        this.pessoas = pessoas;
        this.loading = false;
      },
      error: err => console.log("error", err)
    });
  }

  retrieveAll(): void{
    this.pessoaService.retrieveAll().subscribe({
      next: pessoas => {
        this.pessoas = pessoas;
        this.loading = false;
      },
      error: err => console.log("error", err)
    });
  }


  verContato(content, i: number){
    this.pessoa = this.pessoas[i];
    this.modalService.open(content);
  }

}


