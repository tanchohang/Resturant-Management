import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule, Validator, FormControl, Validators } from '@angular/forms';
import { Component} from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
email:string;
password:string;
rememberme:boolean=false;
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  usernameFormControl=new FormControl('',[
    Validators.required

  ]); 
  passwordFormControl=new FormControl('',[
    Validators.required
  ]);  

  login(){
    this.authService.login(this.email,this.password);
  }


  

}
