import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iuser.interface';
import { BtnComponent } from '../../components/btn/btn.component';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [RouterLink, BtnComponent],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {
  activatedRoute = inject(ActivatedRoute)
  usersService = inject(UsersService)
  unUser!: IUser;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async(params:any) =>{
      const id= params.iduser;
       try {
        let response:any = await this.usersService.getById(id);
        this.unUser = response;
        console.log(this.unUser)
        console.log(response)
        console.log(params)
      }catch(error){
        console.log(error)
      }
      
      
    })
  }}
