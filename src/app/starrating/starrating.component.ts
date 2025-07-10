import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css']
})
export class StarratingComponent {
@Input() rating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];
}
