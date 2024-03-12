import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {
  activatedRoute = inject(ActivatedRoute)
  usersService = inject(UsersService)
  unUser!: IUser;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async(params:any) =>{
      const id= params.iduser
       try {
        this.unUser = await this.usersService.getById(id)
      }catch(error){
        console.log(error)
      }
      
    })
  }


}
