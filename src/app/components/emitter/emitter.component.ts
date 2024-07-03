import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent implements OnInit{
  constructor() { }
  myNumber:number = 0;

  ngOnInit(): void {
  }

  OnNumberChanged(): void {
    this.myNumber = Math.floor(Math.random() * 100);
  }

}
