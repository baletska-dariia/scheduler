import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import {
    JwtInterceptor,
    ErrorInterceptor,
    fakeBackendProvider,
} from '../helpers';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [LoginComponent, RegistrationComponent],
    imports: [MatSelectModule, SharedModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,
    ],
    // exports: [LoginComponent, RegistrationComponent],
})
export class AuthModule {}
