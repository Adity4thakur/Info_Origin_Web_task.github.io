import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Hardcoded valid credentials
  private validUsername = 'aditya';
  private validPassword = 'aditya123';

  login(username: string, password: string) {
    if (username === this.validUsername && password === this.validPassword) {
      alert('Login successful!');
    } else {
      alert('Login failed!');
    }
  }

  //For routing to register component
  constructor(private router: Router) { }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
