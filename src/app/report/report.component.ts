import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../_services/service.service';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  users$: Object;
  searchText;

  constructor(private data: ServiceService,private router: Router,private route: ActivatedRoute) 
  { 
    
  }

  ngOnInit() 
  {
    this.data.getUser().subscribe(
      data => this.users$ = data 
    );
    
  }

 onSelect(id)
 {
  this.router.navigate([id],{relativeTo: this.route});
 }


}
