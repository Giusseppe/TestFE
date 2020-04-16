import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListComponent } from './main/list/list.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent },
  {path: 'main', component: MainComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegistrationComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
