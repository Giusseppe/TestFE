import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: firebase.User;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUserState().subscribe(user => {
      this.user = user;
    });

  }

  login(){
    this.router.navigate(['/login']);
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  register(){
    this.router.navigate(['/register']);
  }

}
