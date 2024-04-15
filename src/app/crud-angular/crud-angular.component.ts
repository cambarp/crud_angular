import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormBuilder , FormGroup , Validators} from '@angular/forms' ;
import { MDataService } from '../m-data.service';
import { Usuario } from '../m-data.service';
import { ReadComponent } from '../read/read.component';



@Component({
  selector: 'app-crud-angular',
  standalone: true,
  imports:[ReactiveFormsModule ,CommonModule,ReadComponent],
  templateUrl: './crud-angular.component.html',
  styleUrl: './crud-angular.component.css'
})
export class CrudAngularComponent {
    formu !: FormGroup;
    mensaje:string =""
    constructor(private formBuilder : FormBuilder , private controlador : MDataService ){
      this.formu=this.formBuilder.group({
        Name:['',Validators.required],
        Apellido:['',Validators.required],
        Correo:['',Validators.required],
        Password:['',Validators.required],
    });
    }
    enviar(){
      if(this.formu.valid){
        const new_user:Usuario ={ Id :this.controlador.obte_user().length + 1,
          Name:this.formu.get('Name')!.value ,         
          Apellido:this.formu.get('Apellido')!.value  ,        
          Correo:this.formu.get('Correo')!.value,          
          Password:this.formu.get('Password')!.value          
        };
        this.controlador.agregar_user(new_user);
        this.mensaje="usuario guardado correctamente";
        this.formu.reset();
      }
    }
    

}
