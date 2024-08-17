import { Component } from '@angular/core';
import { 
    ReactiveFormsModule,
    FormsModule, 
    FormGroup,
    FormBuilder,
    Validators
  } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    //FormGroup
    loginForm!: FormGroup; 

    //สำหรับตัวแปรผูกกับform
    userLogin = {
      "email": "",
      "password": ""
  }
  //Constructor
  constructor(
    private FormBuilder: FormBuilder
  ){}

  //ngOnInit
  ngOnInit() {
    this.loginForm = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

    submitLogin(){
      //ถ้า form ไม่ถูกต้อง (Invalid)
      if(this.loginForm.invalid) {
        alert('กรอกข้อมูลให้ถูกต้อง')
      } else {
    this.userLogin.email = this.loginForm.value.email
    this.userLogin.password = this.loginForm.value.password

    if(this.userLogin.email == "ice.5879@gmail.com" && this.userLogin.password == "0917413963") {
      alert('login success')
    }else{
      alert('login Fail')
    }
    }

  }

}
