import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Usuario {
  Id: number;
  Name: string;
  Apellido: string;
  Correo: string;
  Password: string;
}

@Injectable({
  providedIn: 'root',
})
export class MDataService {
  private estado: BehaviorSubject<Usuario[]> = new BehaviorSubject<Usuario[]>(
    []
  );
  constructor() {}

  agregar_user(n_user: Usuario) {
    const usuario_actual = this.estado.value;
    usuario_actual.push(n_user);
    this.estado.next(usuario_actual);
  }
  obte_user(): Usuario[] {
    return this.estado.value;
  }
  obtener_id(id: number): Usuario | undefined {
    return this.estado.value.find((u) => u.Id === id);
  }
  buscar_user_name(nombre: string): Usuario | undefined {
    return this.estado.value.find(
      (u) => u.Name.toLocaleLowerCase() === nombre.toLocaleLowerCase()
    );
  }

  update_user(usuario: Usuario) {
    const usuario_actual = this.estado.value;
    const index = usuario_actual.findIndex((u) => u.Id === usuario.Id);
    if (index !== -1) {
      usuario_actual[index] = usuario;
      this.estado.next(usuario_actual);
    }
  }

  delete_user(id: number) {
    const usuario_actual = this.estado.value;
    const index = usuario_actual.findIndex((u) => u.Id === id);
    if (index !== -1) {
      usuario_actual.splice(index, 1);
      this.estado.next(usuario_actual);
    }
  }
}
