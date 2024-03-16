import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iuser.interface';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent, RouterLink],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  usersServices = inject(UsersService);

  arrUsers: IUser[] = [];
  page: number = 1

  async ngOnInit(): Promise<void> {
  //    this.usersServices.getAll().subscribe((data:any) => {
  //        this.arrUsers = data.results;
  // });
    try{
      let response:any = await this.usersServices.getAllPromises(this.page)
     this.arrUsers = response.results;
     console.log(this.arrUsers)
    }catch(err){
       console.log(err)
    }
   }
  changePage(pageNumber: number): void {
    this.page = pageNumber;      
    this.ngOnInit();
  }

}


