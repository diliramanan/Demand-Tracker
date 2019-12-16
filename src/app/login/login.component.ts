import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from '../_services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading= false ;
  submitted = false;
  login = true;
  LoginFailMessage="Login failed";
  action="Close";
  users$: Object;
  loginFailFlag= true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private data: ServiceService
  ){}
    
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        id: ['', Validators.required],
        pswd: ['',Validators.required]
  });

  this.data.loginUsers().subscribe(
    data => this.users$ = data 
  );
  
  }

  get f() { return this.loginForm.controls; }

  onSubmit() 
  {

    this.submitted = true;
    this.loading= true ;

    for(let num in this.users$)
    {
      console.log(this.users$[num].id,this.users$[num].pswd)
      if(this.loginForm.value.id==this.users$[num].id && this.loginForm.value.pswd==this.users$[num].pswd)
      {
        this.router.navigate(['report']);
        this.loginFailFlag=false;
      }
   }

    if(this.loginFailFlag==true)
    {
      this.snackBar.open(this.LoginFailMessage, this.action, {
        duration: 2000, });
        this.login = false;
    }

    this.loading= false ;

      
  }

  
  
}
