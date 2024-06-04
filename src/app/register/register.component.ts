import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  validateForm() {
    const termsCheckbox = document.getElementById("terms") as HTMLInputElement;
    if (termsCheckbox && !termsCheckbox.checked) {
      alert("Please check the Terms and Conditions");
      return false;
    }
    return true;
  }

}
