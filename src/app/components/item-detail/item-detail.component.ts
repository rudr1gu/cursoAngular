import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../../Pessoa';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent implements OnInit {
  pessoa?: Pessoa;

  constructor(private route: ActivatedRoute, private listService: ListService) {
    this.getPessoa()
  }

  ngOnInit() {}
  
  getPessoa(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.listService.getItem(id).subscribe((pessoa) => {
      this.pessoa = pessoa
    })
  }
  

}
