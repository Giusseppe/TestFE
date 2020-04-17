import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ModalService } from './detalle/modal.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: any[];
  userSelected: any;
  constructor(private userService: UsersService,public modalService: ModalService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response.results;
    });
  }

  verPerfil(user){
    this.userSelected = user;
    console.log(this.userSelected);
    this.modalService.abrirModal();
  }
}
