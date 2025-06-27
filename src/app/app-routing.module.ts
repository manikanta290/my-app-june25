import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalulatorComponent } from './calulator/calulator.component';
import { ClockComponent } from './clock/clock.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {path:'',component:LoginComponent},//default Routing
  {path:'dashboard',component:DashboardComponent,children:[
     {path:'home',component:HomeComponent},//child routing
     {path:'calculator',component:CalulatorComponent},
     {path:'clock',component:ClockComponent},
     {path:"data-binding",component:DataBindingComponent},
     {path:"directives",component:DirectivesComponent},
     {path:"employees",component:EmployeesComponent}
  ]},//parent Routing


  {path:'**',component:PageNotFoundComponent},//wild card layout

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
