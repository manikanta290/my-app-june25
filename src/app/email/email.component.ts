import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  email:any[]=[]
  constructor(private _emailServices:EmailService){
    _emailServices.getEmail().subscribe(
      (data:any)=>{
        console.log(data);
        this.email=data;
      },(err:any)=>{
        alert("internal Server Error!");
      }
    )
  }


}
