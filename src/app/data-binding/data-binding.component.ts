import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {


  // interpolation
  userName:string='Dinesh';
  age:number=29;

  // property binding
  isDataPresent:Boolean=true;

// event binding
  click(){
    alert("Hello")
  }

  mobile:string='+91';
  name(){
    console.log(this.mobile)
  }
}
