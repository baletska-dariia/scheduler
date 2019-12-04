import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  langs = [ 'en', 'ru' ];
  currentLang: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private translateService: TranslateService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.currentLang = this.translateService.currentLang;
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLoginClick() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

  switchLanguage(lang: string) {
    this.translateService.use(lang);
    this.currentLang = this.translateService.currentLang;
    localStorage.setItem('lang', lang);
  }
}
