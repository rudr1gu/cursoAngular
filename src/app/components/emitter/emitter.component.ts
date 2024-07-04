import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent implements OnInit{
  constructor() { }
  primeiraDezena:number = 0;
  segundaDezena:number = 0;
  terceiraDezena:number = 0;
  quartaDezena:number = 0;
  quintadezena:number = 0;
  sextaDezena:number = 0;


  ngOnInit(): void {
  }

  OnNumberChanged(): void {
    this.primeiraDezena = Math.floor(Math.random() * 60);
    this.segundaDezena = Math.floor(Math.random() * 60);
    this.terceiraDezena = Math.floor(Math.random() * 60);
    this.quartaDezena = Math.floor(Math.random() * 60);
    this.quintadezena = Math.floor(Math.random() * 60);
    this.sextaDezena = Math.floor(Math.random() * 60);

  }

}
