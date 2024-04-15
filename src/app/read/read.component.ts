import { Component, OnInit } from '@angular/core';
import { MDataService } from '../m-data.service';
import { Usuario } from '../m-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [CommonModule, FormsModule, UpdateComponent],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent implements OnInit {
  name: string = '';
  usuario_sele: Usuario | undefined;
  usuario = '';
  mostrar_update : boolean =false;
  ocultar:boolean = true;
  usuarios: Usuario[] = [];
  constructor(private read: MDataService) {}
  ngOnInit() {
    this.usuarios = this.read.obte_user();
  }
  obtener_id(id: number) {
    this.usuario_sele = this.read.obtener_id(id);
  }
  buscar_usuario() {
    console.log('Name:', this.name);
  if (this.name) {
    this.usuario_sele = this.read.obte_user().find(user => user.Name === this.name);
  }}
  
  eliminar_user(){
    if (this.usuario_sele) {
      this.read.delete_user(this.usuario_sele.Id);
      this.usuario_sele = undefined;
    }
  }

  update_user() {
    this.mostrar_update = true;
    this.ocultar=false;
  }

}

