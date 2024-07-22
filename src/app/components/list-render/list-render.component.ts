import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../Pessoa';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit{
  list: Pessoa[] = [];

  pessoaDetails = ''
  
  constructor(private listService: ListService) {
    this.getPessoas()
  }
  
  ngOnInit() {}

  showLast(pessoa: Pessoa):void {
    this.pessoaDetails = `O Sobrenome da pessoa é: ${pessoa.nome}`
  }

  removePessoa(pessoa: Pessoa):void {
    this.list = this.list.filter((p) => p !== pessoa)
    this.listService.remove(pessoa.id).subscribe();
  }

  getPessoas(): void {
    this.listService.getAll().subscribe((pessoas) => {
      this.list = pessoas
    })
  }
}
