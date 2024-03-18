import { Component, Inject, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  tipo: string = "NUEVO";
  btn: string = "Enviar";
  usersForm: FormGroup;
  usersService = inject(UsersService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute)


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
      image: new FormControl('',[
        Validators.required,
      ]),
      email: new FormControl('',[
        Validators.pattern(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/),
      ]),
      password: new FormControl('',[
    
      ]),
      repassword: new FormControl('',[]),
    },[this.checkpassword]);
  }
  checkpassword(formValue: AbstractControl): any {
    const password = formValue.get('password')?.value;
    const repassword = formValue.get('repassword')?.value;
    if(password !== repassword){
      return {'checkpassword': true}
    }else {
      return null
    }
    

  }
  

  ngOnInit(){
    this.activatedRoute.params.subscribe(async(params:any) =>{
      if(params.id){
        const response = await this.usersService.getById(params.id);
        this.tipo = "ACTUALIZAR";
        this.btn = "Actualizar"


        this.usersForm = new FormGroup({
          _id: new FormControl(response._id),
          first_name: new FormControl(response.first_name,[
            Validators.required,
            Validators.minLength(3)
          ]),
          last_name: new FormControl(response.last_name,[
            Validators.required,
            Validators.minLength(3)
          ]),
          username: new FormControl(response.username,[
            Validators.required,
          ]),
          image: new FormControl(response.image,[
            Validators.required,
          ]),
          email: new FormControl(response.email,[
            Validators.pattern(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/),
          ]),
          password: new FormControl(response.password,[
    
          ]),
          repassword: new FormControl(response.password,[]),
        },[this.checkpassword]);
      }

    });
 
    
    
  }


  async getDataForm(): Promise<void>{
    if(this.usersForm.value._id){
      
      let response = await this.usersService.update(this.usersForm.value);
      if(response.id){
        alert('Usuario actualizado correctamente')
    
        this.router.navigate(['/home'])
      }else{
        alert('Error al actualizar usuario')
      }
    }else{  
      let response = await this.usersService.createUser(this.usersForm.value);
      console.log(response);
      if(response.id) {
        alert('Usuario añadido correctamente')
        this.router.navigate(['/home'])
      }else {
        alert('Error al añadir usuario')
      }
      this.usersForm.reset()
    }
    }



  checkControl(formControlName: string, validador: string): boolean | undefined {
    return this.usersForm.get(formControlName)?.hasError(validador) && this.usersForm.get(formControlName)?.touched
  }


  
}
