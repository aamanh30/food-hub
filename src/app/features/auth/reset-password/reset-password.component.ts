import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  form = new UntypedFormGroup({});

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      password: [undefined, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [
        undefined,
        [Validators.required, Validators.minLength(8)]
      ]
    });
  }
}
