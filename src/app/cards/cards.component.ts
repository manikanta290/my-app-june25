import { Component } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
   cards:any[]=[]
    constructor(private _cardsServices:CardsService){
      _cardsServices.getCards().subscribe(
        (data:any)=>{
          console.log(data);
          this.cards=data;
        },(err:any)=>{
          alert("internal Server Error!");
        }
      )
    }

}
