import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  selectID : BehaviorSubject<number>;
  constructor() { 
    this.selectID = new BehaviorSubject(0);
  }

  selectBox(id : number) {
    this.selectID.next(id);
  }
}
