import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BagService {
  bagItemNumber : BehaviorSubject<number>
  constructor() {
    this.bagItemNumber = new BehaviorSubject(0);
   }

   changeBoxNumber(newNumber: any) {
    this.bagItemNumber.next(newNumber);
   }

   checkNewBag() {
        //Get bag info
        let allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");
        let currentUser = localStorage.getItem("currentUser");
        let bagCount;
    
        for(let i = 0; i < allUsers.length; i++) {
          if(allUsers[i].email == currentUser) {
            bagCount = allUsers[i].bag;
          }
        }
    
        //Update service
        if(bagCount > 0) {
          this.changeBoxNumber(bagCount);
        }    
   }
}
