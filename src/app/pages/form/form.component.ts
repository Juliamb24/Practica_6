import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  tipo: string = "NUEVO";
  usersForm: FormGroup;


  constructor(){
    this.usersForm = new FormGroup({
      first_name: new FormControl('',[]),
      last_name: new FormControl('',[]),
      username: new FormControl('',[]),
      image: new FormControl('',[]),
      email: new FormControl('',[]),
      password: new FormControl('',[]),
    },[])
  }

  getDataForm(){
    console.log(this.usersForm.value)
  }
}
