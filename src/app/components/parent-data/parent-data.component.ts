import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent implements OnInit{
  @Input() name: string = '';
  @Input() userData!: {name: string, age: number, job: string, car: {make: string, model: string, year: number}};
  

  constructor(){
    
  }

  ngOnInit(): void {
  }

}
