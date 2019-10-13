import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [],
  exports: [LoginComponent, RegistrationComponent]

})
export class HomeModule { }
