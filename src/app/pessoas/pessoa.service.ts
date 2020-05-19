import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../models/pessoa';

import {environment} from '../../environments/environment'

@Injectable({
  providedIn:'root'
})
export class PessoaService{

  private baseUrl: string = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }


  retrieveAll(): Observable<Pessoa[]>{
    const nome = localStorage.getItem('nome');
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization': 'Bearer '+token.access_token
    }
    return this.httpClient.get<Pessoa[]>(`${this.baseUrl}/api/pessoas?nome=${nome}`, {headers});
  }

  save(pessoa: Pessoa): Observable<Pessoa>{
    const nome = localStorage.getItem('nome');
    console.log(nome)
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const jwt = token.access_token;
    const headers = {
      'Authorization': 'Bearer '+jwt
    }

    return this.httpClient.post<Pessoa>(`${this.baseUrl}/api/pessoas?nome=${nome}`, pessoa, {headers})

  }

  buscar(busca: String):Observable<Pessoa[]>{

    const nome = localStorage.getItem('nome');
    const tokenString = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      'Authorization': 'Bearer '+token.access_token
    }

    return this.httpClient.get<Pessoa[]>(`${this.baseUrl}/api/pessoas/busca?nome=${busca}&nomeUsuario=${nome}`, {headers});
  }


}
