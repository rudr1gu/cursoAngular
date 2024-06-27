import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit{
  name: string = 'Rudr1gu';
  age: number = 28;
  job: string = 'Software Developer';
  car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2019
  };
    
  constructor(){
   
  }

  ngOnInit(): void {
  }

}
