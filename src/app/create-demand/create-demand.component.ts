import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../_services/service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-demand',
  templateUrl: './create-demand.component.html',
  styleUrls: ['./create-demand.component.css']
})
export class CreateDemandComponent implements OnInit {

  CreateDemandForm: FormGroup;
  loading= false ;
  submitted = false;
  MessageCreated="Demand Created Successfully!!!";
  action="Close";

  constructor(private formBuilder: FormBuilder, private router: Router,private service: ServiceService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.CreateDemandForm = this.formBuilder.group({
      DemandID: ['', Validators.required],
      DealID: ['', Validators.required],
      JD: ['', Validators.required],
      Role: ['', Validators.required],
      Location: ['', Validators.required],
      Expr: ['', Validators.required],
      ResourceCount: ['', Validators.required],
      BSD: ['', Validators.required],
      Bucket: ['', Validators.required],
      ScaleID: ['', Validators.required],
      Status: ['',Validators.required]
      });
  }



  onSubmit()
  {
    
    this.loading= true ;

    if(this.CreateDemandForm.valid)
    {
       this.service.postData(this.CreateDemandForm.value).subscribe(response=>response);
       this.submitted = true;
       this._snackBar.open(this.MessageCreated, this.action, {
        duration: 2000, });
    }
    else
    {
      this.submitted = false;
    }

    this.loading= false ;
    
  }


}
