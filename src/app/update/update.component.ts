import { Component, OnInit } from '@angular/core';
import { MDataService, Usuario } from '../m-data.service';
import {  FormBuilder, FormGroup, ReactiveFormsModule ,Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent{
  form_update !: FormGroup ;
  mensaje_actualizar : string = 'usuario actualizado correctamente';
  user_s: Usuario | undefined;
  constructor(private update: MDataService, private formbuilder:FormBuilder){
    this.form_update = this.formbuilder.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      correo:  ['',Validators.required],
      contrasena:['',Validators.required],
    });
  }


  ngOnInit(): void {
    
    this.user_s = {
      Id: 1,
      Name:'' ,
      Apellido: '',
      Correo: '',
      Password: '',
    };

    this.form_update.patchValue({
      nombre: this.user_s.Name,
      apellido: this.user_s.Apellido,
      correo: this.user_s.Correo,
    });
  }
  
  onSubmit() {
    if (this.user_s) {
      if (this.form_update.valid) {
        const nombre = this.form_update.value.nombre;
        const apellido = this.form_update.value.apellido;
        const correo = this.form_update.value.correo;
        const contrasena = this.form_update.value.contrasena;

      this.user_s = { ...this.user_s, ...{ Name: nombre, Apellido: apellido, Correo: correo, Password: contrasena } };

      this.update.update_user(this.user_s);
      alert(this.mensaje_actualizar)
      this.form_update.reset();
      this.user_s = undefined;
    }
  }
}}