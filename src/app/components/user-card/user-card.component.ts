import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { RouterLink } from '@angular/router';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterLink, BtnComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() miUser!: IUser;
}
