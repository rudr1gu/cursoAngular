import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../Pessoa';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit{
  list: Pessoa[] = [
    {name: 'Cizok', age: 25, lastName: 'Silva'},
    {name: 'Dudis', age: 30, lastName: 'Marilvis'},
    {name: 'T4vzz', age: 35, lastName: 'Movic'},
    {name: 'Rudr1gu', age: 40, lastName: 'Silva'},
  ];

  pessoaDetails = ''
  
  constructor(private listService: ListService) {

  }
  
  ngOnInit() {}

  showLast(pessoa: Pessoa):void {
    this.pessoaDetails = `O Sobrenome da pessoa é: ${pessoa.lastName}`
  }

  removePessoa(pessoa: Pessoa):void {
    console.log('Pessoa a ser removida: ', pessoa)
    this.list = this.listService.remove(this.list, pessoa)
  }
}
