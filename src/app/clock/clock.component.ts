import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
 user:User={
  name:'manikanta',
  mobile:8143882055,
  email:'manikanta@gmail.com',
  age:28

 }
}
