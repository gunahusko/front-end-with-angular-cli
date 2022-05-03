import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SignUpDetails } from "../../../shared/models/signup.model";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @Output()
  signUpEvent = new EventEmitter<SignUpDetails>();

  signUpForm = new FormGroup({});

  countries = [
    {
      title: 'Latvia',
      countryCode: 'LV'
    },
    {
      title: 'Estonia',
      countryCode: 'EE'
    },
    {
      title: 'Lithuania',
      countryCode: 'LT'
    }
  ]

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      country: [''],
      gender: [''],
      notARobot: [false]
    })
  }

  signUp(): void {
    this.signUpForm.markAllAsTouched();

    if (this.signUpForm.valid && this.signUpForm.value.notARobot === true) {
      this.signUpEvent.emit(this.signUpForm.value)
    }
    this.signUpForm.reset()
  }
}
