import { Contato } from './contato';
export class Pessoa{
  id: number;
  nome: string;
  cpf: string;
  nascimento: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  contatos: Contato[];
}
