import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
 states:string[]=['Andhra Pradesh','Telangana', 'Tamilnadu', 'Kerala','Karnataka'];


//  accessIdentifier variableName:dataType=InitialValue
products:any[]=[
  {productName:'Tv',price:15000,rating:1.8},
  {productName:'AC',price:45000,rating:4.5},
  {productName:'Parker Pen',price:500,rating:4.8},
  {productName:'Mobile',price:25000,rating:3.5},
  {productName:'Laptop',price:150000,rating:4.0},
  {productName:'Watch',price:15000,rating:3.8},
]
}


