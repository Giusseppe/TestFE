import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListComponent } from './list/list.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegistrationComponent },
  {path: 'home', component: HomeComponent },
  {path: 'list', component: ListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
