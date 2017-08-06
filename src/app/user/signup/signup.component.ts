import { FirebasedbService } from './../../services/db/firebasedb.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';




const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  username: string;
  email: string;
  password: string;


  constructor(
    private authService: AuthService,
    private firebasedbService:FirebasedbService,
    private router: Router
  ) {}


  ngOnInit() {}

  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)

  ]);
  emailFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  confirmPasswordFormControl = new FormControl('', [
    
  ]);


  signup() {
    this.authService.signupWithEmail(this.username,this.email, this.password);    
  }

  signupWithGoogle(){
    this.authService.loginWithGoogle();
  }

  signupWithFacebook(){
    this.authService.loginWithFacebook();
  }

  signupWithTwitter(){
    this.authService.loginWithTwitter();
  }

}
