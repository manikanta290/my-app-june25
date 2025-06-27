import { Component } from '@angular/core';

@Component({
  selector: 'app-calulator',
  templateUrl: './calulator.component.html',
  styleUrls: ['./calulator.component.css']
})
export class CalulatorComponent {
num1: number = 0;
num2: number = 0;
result: number = 0;
 add(){
     this.result = this.num1+this.num2;
 }
 sub(){
     this.result = this.num1-this.num2;
 }
 mul(){
      this.result = this.num1*this.num2
 }
 div(){
  this.result = this.num1/this.num2
 }

}
