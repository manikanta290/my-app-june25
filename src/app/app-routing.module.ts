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
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';
import { CardsComponent } from './cards/cards.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateIdComponent } from './create-id/create-id.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},//default Routing
  {path:'registration', component:RegistrationComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard], children:[
     {path:'',component:HomeComponent},//child routing
     {path:'calculator',component:CalulatorComponent},
     {path:'clock',component:ClockComponent},
     {path:"data-binding",component:DataBindingComponent},
     {path:"directives",component:DirectivesComponent},
     {path:"employees",component:EmployeesComponent},
     {path:'vehicles',component:VehiclesComponent},
     {path:'flipkart',component:FlipkartComponent},
     {path:'email',component:EmailComponent},
     {path:'cards',component:CardsComponent},
     {path:'weather',component:WeatherComponent},
     {path:'creatVehicle',component:CreateVehicleComponent},
     {path:"student",component:StudentIdComponent},
     {path:"create-id",component:CreateIdComponent},
     {path:"createstudent",component:CreateStudentComponent},
     {path:"vehicle-details/:id",component:VehicleDetailsComponent},
     {path:'edit-Vehicle/:id',component:CreateVehicleComponent},

  ]},//parent Routing


  {path:'**',component:PageNotFoundComponent},//wild card layout

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
