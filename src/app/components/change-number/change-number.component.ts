import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent implements OnInit{
  @Output() numberChanged = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.numberChanged.emit();
  }
}