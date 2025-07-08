import { Component } from '@angular/core';
import { StudentIdService } from '../student-id.service';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css']
})
export class StudentIdComponent {
       student:any[]=[];
          constructor(private _studentIdService:StudentIdService){
           this.loadcards();
  }
  loadcards(){
     this._studentIdService.getidcard().subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

   term:string='';
  search(){
    this._studentIdService.getfilteridcard(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
      },(err:any)=>{
        alert('Internal Server Error')
      }
    )
  }

   column:string='';
  order:string='';
  sort(){
    console.log(this.column,this.order);
    this._studentIdService.getsortedidcard(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
      },(err:any)=>{
        alert('Internal Server Error');
      }
    )
  }

  items:any='';
  page:any='';
  pagination(){
    console.log(this.items,this.page);
    this._studentIdService.getPaginatedidcard(this.items,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
     },(err:any)=>{
      alert('Internal Server Error')
     }
    )
  }

  delete(id:any){
  if(confirm('Are you sure to Delete')==true){
  this._studentIdService.deleteCard(id).subscribe(
     (data:any)=>{
        alert("Record deleted successfully");
        this.loadcards();
      },(err:any)=>{
        alert('Internal Server Error');
      }
  )
  }else{
    alert("You have Cancelled");
  }
}


}
