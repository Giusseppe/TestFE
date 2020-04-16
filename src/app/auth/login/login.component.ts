import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authError: any = null;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    //siempre se esta escuchando si existe un error.
    this.auth.eventAuthErrors$.subscribe(data => {
      this.authError = data;
    });
  }
  /**
   * se llama al servicio que contiene los metodos que utiliza firebase
   * @param loginForm formulario de logeo
   */
  onSubmitLogin(loginForm){
    this.auth.login(loginForm.value.email, loginForm.value.password);
  }
}
