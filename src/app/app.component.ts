import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Rudr1gu';
  userData = {
    name: 'Rudr1gu',
    age: 28,
    job: 'Software Developer',
    car: {
      make: 'Porche',
      model: 'Cayenne',
      year: 2021
    }
  };
  title = 'projetoAngular';
}
