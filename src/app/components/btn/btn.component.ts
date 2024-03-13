import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input() container:string = "";
  @Input() idUser:string = "";

  borrarUser(id: string){
    let response = confirm('¿Deseas eliminar al usuario con id ' + this.idUser)
    console.log(response)
  }


}
