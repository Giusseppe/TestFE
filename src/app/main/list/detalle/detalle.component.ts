import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() user: any;
  titulo: string = 'Detalle del usuario';
  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.modalService.cerrarModal();
  }

}
