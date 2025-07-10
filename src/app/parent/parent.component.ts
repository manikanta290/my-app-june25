import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
// num:number=0;
// display(value:number){
//  alert(value);
// }
data:string='welcome'
receivedData(value:string){
  this.data=value;
}
}
