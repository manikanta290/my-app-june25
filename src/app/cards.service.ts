import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

 constructor(private _httpClient:HttpClient) { }

   getCards():Observable<any>{
     return this._httpClient.get("https://picsum.photos/v2/list?page=1&limit=100");
   }
}
