import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent implements OnInit{
  someText = 'This is a text';
  today = new Date();
  constructor() {}
  
  ngOnInit() {}

}
