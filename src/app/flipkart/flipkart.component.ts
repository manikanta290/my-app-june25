import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
    flipkart:any[]=[]
    constructor(private _flipakrtService:FlipkartService){
      _flipakrtService.getflipkart().subscribe(
        (data:any)=>{
          console.log(data);
          this.flipkart=data;
        },(err:any)=>{
          alert("internal Server Error!");
        }
      )
    }
}
