import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input() container:string = "";
  @Input() idUser:string | undefined = "";
  usersService = inject(UsersService)
  

  async borrarUser(id: string | undefined){
    id = this.idUser 
    if(id !== undefined){
      let confirmacion = confirm('¿Deseas eliminar al usuario con id ' + this.idUser)
      if(confirmacion){
        let response = await this.usersService.delete(id);
        if(response._id){
          alert('Se ha borrado el usuario ' + response.first_name + ' ' + response.last_name + 'con éxito')
        }
    }
    }
  }


}
