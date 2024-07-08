import { Injectable } from '@angular/core';
import { Pessoa } from '../Pessoa';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(pessoas: Pessoa[], pessoa: Pessoa){
    return pessoas.filter((p) => p !== pessoa)
  }
}
