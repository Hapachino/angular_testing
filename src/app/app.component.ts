import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = [
    'Basic',
    'Advanced',
    'Pro',
  ];

  info = {
    email: '',
    subscription: '',
    password: '',
  };

  onSubmit(formValue) {
    const { email, subscription, password } = formValue;
    
    this.info.email = email;
    this.info.subscription = subscription;
    this.info.password = password;
  }
}
