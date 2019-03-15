import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [];
  default = 'basic';

  onNumberCreated(numberData: { number: number }) {
    this.numbers.push({ number: numberData.number });
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
