import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './home/login/login.component';
import { RegistrationComponent } from './home/registration/registration.component';


const routes: Routes = [{ path: 'dashboard', component: DashboardComponent },
                        {path: 'login', component: LoginComponent},
                        {path: 'registration', component: RegistrationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
