import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ReportComponent } from './report/report.component';
import { DetailsComponent } from './details/details.component';
import { CreateDemandComponent } from './create-demand/create-demand.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = 
[

  {
    path: '',
    component: LoginComponent
  },
 {
  path: 'login',
  component: LoginComponent
},
{
  path: 'contactUs',
  component: ContactComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'report',
  component: ReportComponent
},
{
  path: 'report/:id',
  component: DetailsComponent
},
{
  path: 'createdemand',
  component: CreateDemandComponent
},
{
  path: 'signup',
  component: SigninComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
