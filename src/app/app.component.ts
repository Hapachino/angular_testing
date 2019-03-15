import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [];
  default = '';
  prices = [100, 200, 300];
  
  onNumberCreated(numberData: { number: number }) {
    this.numbers.push({ number: numberData.number });
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
