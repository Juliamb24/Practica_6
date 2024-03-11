import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iuser.interface';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  usersServices = inject(UsersService)
  arrUsers  = [];

 // async ngOnInit(): Promise<void>{
 //   this.arrUsers = await this.usersServices.getAllPromises()
 // }
  ngOnInit(): void {
    this.usersServices.getAll().subscribe((data:IUser[]) => {
      this.arrUsers = data;
      console.log(this.arrUsers)
    })
  }



}
