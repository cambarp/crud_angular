import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudAngularComponent } from './crud-angular/crud-angular.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CrudAngularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Crud';
}
