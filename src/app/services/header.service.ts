import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  showHeader : BehaviorSubject<boolean>;
  activeBag : BehaviorSubject<boolean>;

  constructor() { 
    this.showHeader = new BehaviorSubject(true);
    this.activeBag = new BehaviorSubject(false);
  }

  hide() {
    this.showHeader.next(false);
  }

  display() {
    this.showHeader.next(true);
  }

  greenBag(boolean : boolean) {
    this.activeBag.next(boolean);    
  }
}
