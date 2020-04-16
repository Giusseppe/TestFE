import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    /**
     * si se gatilla un error en la autentificacion se almacena en nuestra variable authError
     */
    this.auth.eventAuthErrors$.subscribe(data => {
      this.authError = data;
    });
  }

  register(user){
    this.auth.createUser(user.value);
  }
}
