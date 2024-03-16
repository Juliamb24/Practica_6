import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  tipo: string = "NUEVO";
  usersForm: FormGroup;
  usersService = inject(UsersService)


  constructor(){
    this.usersForm = new FormGroup({
      first_name: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      last_name: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      username: new FormControl('',[
        Validators.required,
      ]),
      image: new FormControl('',[]),
      email: new FormControl('',[
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/),
      ]),
      password: new FormControl('',[
        Validators.required,
      ]),
      repassword: new FormControl('',[
        Validators.required,
      ]),
    },[])
  }

  async getDataForm(): Promise<void>{
    let response: any;
    console.log(this.usersForm.value);
    console.log(response);
    try{
      let response:any;
      response = await this.usersService.createUser(this.usersForm.value);
      console.log(response);
    }catch (err){
      alert('error');
    }
    

    this.usersForm.reset()
  }

  checkControl(formControlName: string, validador: string): boolean | undefined {
    return this.usersForm.get(formControlName)?.hasError(validador) && this.usersForm.get(formControlName)?.touched
  }


  
}
