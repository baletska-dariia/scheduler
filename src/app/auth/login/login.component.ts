import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
    AuthenticationService,
    UserService,
    AlertService,
} from 'src/app/services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
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
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
    onSignUpClick() {
        this.router.navigate(['/registration']);
    }

    onSubmit() {
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;

        this.userService
            .authenticate(this.loginForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Login is successful', true);
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
