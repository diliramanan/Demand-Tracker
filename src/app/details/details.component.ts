import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../_services/service.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit
{
  
  EditDemandForm: FormGroup;
  loading= false ;
  submitted = false;
  deleted = false;
  edit= false;
  MessageUpdated="Demand Updated Successfully";
  MessageDeleted="Demand Deleted Successfully"
  action="Close";

  user$: Object;
  id: Object;

  constructor(private route: ActivatedRoute,private service: ServiceService,private router: Router, private formBuilder: FormBuilder,private _snackBar: MatSnackBar) 
  { 
    this.route.params.subscribe( params => this.id = params.id );
  }

  ngOnInit() 
  {

    this.service.getUsers(this.id).subscribe(
      data => this.user$ = data 
    );

    this.EditDemandForm = this.formBuilder.group({
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

  
  get f() { return this.EditDemandForm.controls; }

  onSubmit()
  {
    this.submitted = true;
    this.loading= true;
    this.service.putData(this.EditDemandForm.value,this.id).subscribe(response=>response);
    this.loading= false;
    this._snackBar.open(this.MessageUpdated, this.action, {duration: 2000, });
  }

  onDel()
  {
    this.deleted = true;
    this.route.params.subscribe( params => this.id = params.id );
    this.service.delData(this.id).subscribe(response=>response);
    this._snackBar.open(this.MessageDeleted, this.action, {duration: 2000, });
  }
  
  onEdit()
  {
    this.edit= true;
    this.EditDemandForm = this.formBuilder.group({
      DemandID: [this.user$['DemandID'], Validators.required],
      DealID: [this.user$['DealID'], Validators.required],
      JD: [this.user$['JD'], Validators.required],
      Role: [this.user$['Role'], Validators.required],
      Location: [this.user$['Location'], Validators.required],
      Expr: [this.user$['Expr'], Validators.required],
      ResourceCount: [this.user$['ResourceCount'], Validators.required],
      BSD: [this.user$['BSD'], Validators.required],
      Bucket: [this.user$['Bucket'], Validators.required],
      ScaleID: [this.user$['ScaleID'], Validators.required],
      Status: [this.user$['Status'], Validators.required]
    });

  }

}
