import { Component } from '@angular/core';
import { LoginDetails } from "../../shared/models/login.model";
import { SignUpDetails } from "../../shared/models/signup.model";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  exampleValue = "I don't know";

  login(loginDetails: LoginDetails): void {
    console.log('login info', loginDetails);
  }

  signUp(signUpDetails: SignUpDetails): void {
    console.log('sign up info', signUpDetails);
  }
}
