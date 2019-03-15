import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  numbers = [];
  default = '';
  prices = [100, 200, 300];

  user = {
    email: '',
    price: '',
  }

  defaultEmail() {
    this.signUpForm.form.patchValue({
      userData: {
        email: 'hello',
      },
      password: 'hey',
    });
    console.log(this.user);
  }

  onNumberCreated(numberData: { number: number }) {
    this.numbers.push({ number: numberData.number });
  }

  onSubmit(form: NgForm) {
    const { userData, price } = this.signUpForm.value;
    const { user } = this;

    user.email = userData.email;
    user.price = price;

    this.signUpForm.reset();
  }
}
