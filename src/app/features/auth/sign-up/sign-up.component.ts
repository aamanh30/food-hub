import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form = new UntypedFormGroup({});

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [undefined],
      email: [undefined, [Validators.required, Validators.email]],
      password: [undefined, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [
        undefined,
        [Validators.required, Validators.minLength(8)]
      ],
      officialEmail: [undefined, [Validators.email]],
      dob: [undefined],
      location: [undefined]
    });
  }
}
