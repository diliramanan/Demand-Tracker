import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from '../_services/service.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  signup: FormGroup;
  loading= false ;
  submitted = false;
  SignupFailMessage="User Already Exists";
  action="Close";
  users$: Object;
  SignupFlag=false;
 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private service: ServiceService
  ) { }

  ngOnInit() {
    this.signup = this.formBuilder.group({
      id: ['', Validators.required],
      pswd: ['',Validators.required]
      });

      this.service.loginUsers().subscribe(
        data => this.users$ = data 
      );
  }

  get f() { return this.signup.controls; }

  /* login_signup */

  onSubmit() 
  {
    this.submitted = true;
    this.loading= true ;

    for(let num in this.users$)
    {
      if(this.signup.value.id==this.users$[num].id)
      {
        this.SignupFlag=true;
        break
      }
   }

   if(this.SignupFlag==true)
   {
      this.snackBar.open(this.SignupFailMessage, this.action, {
      duration: 2000, });
   }
   else
   {
    this.service.signup(this.signup.value).subscribe(response=>response);
    console.log(this.signup.value+this.signup.value);
    this.router.navigate(['login']);
   }
    this.loading= false ;
  }



}
