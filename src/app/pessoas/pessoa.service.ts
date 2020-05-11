import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn:'root'
})
export class PessoaService{

  // private baseUrl: string = "http://localhost:8080";
  private baseUrl: string = "https://optimum-api-back.herokuapp.com";

  constructor(private httpClient: HttpClient) { }


  retrieveAll(): Observable<Pessoa[]>{
    return this.httpClient.get<Pessoa[]>(`${this.baseUrl}/pessoas`);
  }

  save(pessoa: Pessoa): Observable<Pessoa>{

    return this.httpClient.post<Pessoa>(`${this.baseUrl}/pessoa`, pessoa)

  }

  buscar(busca: String):Observable<Pessoa[]>{
    return this.httpClient.get<Pessoa[]>(`${this.baseUrl}/pessoas/busca?nome=${busca}`);
  }


}
