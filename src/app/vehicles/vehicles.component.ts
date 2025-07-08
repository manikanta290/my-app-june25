import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
 vehicles:any[]=[]

  constructor(private _vehiclesService:VehiclesService){
    this.loadVehicles();
  }
  loadVehicles(){
    this._vehiclesService.getVehicles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }

  term:string='';
  search(){
    this._vehiclesService.getFilteredVehicles(this.term).subscribe(
       (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }

  column:string='';
  order:string='';
  sort(){
    console.log(this.column,this.order);
    this._vehiclesService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert('Internal Server Error');
      }
    )
  }

  items:any='';
  page:any='';
  pagination(){
    console.log(this.items,this.page);
    this._vehiclesService.getPaginatedVehicles(this.items,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert('Internal Server Error');
      }
    )
}

delete(id:any){
  // console.log(id);
  if(confirm('Are you sure to Delete')==true){
  this._vehiclesService.deleteVehicle(id).subscribe(
     (data:any)=>{
        alert("Record deleted successfully");
        this.loadVehicles();
      },(err:any)=>{
        alert('Internal Server Error');
      }
  )
  }else{
    alert("You have Cancelled");
  }
}
  

}


