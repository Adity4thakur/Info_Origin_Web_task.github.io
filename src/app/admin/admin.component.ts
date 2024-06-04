import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  // Hardcoded valid credentials
  private validUsername = 'admin';
  private validPassword = 'admin123';

  login(username: string, password: string) {
    if (username === this.validUsername && password === this.validPassword) {
      alert('Login successful!');
    } else {
      alert('Login failed!');
    }
  }
}
