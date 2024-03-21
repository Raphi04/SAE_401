import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BagService {
  bagItemNumber : BehaviorSubject<number>
  totalPrix : BehaviorSubject<number>

  constructor() {
    this.bagItemNumber = new BehaviorSubject(0);
    this.totalPrix = new BehaviorSubject(0);
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
        } else {
          this.changeBoxNumber(0);
        }
  }

  calculTotal() {
    //Get bag info
    let allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");
    let currentUser = localStorage.getItem("currentUser");

    for(let i = 0; i < allUsers.length; i++) {
      if(allUsers[i].email == currentUser) {
        let bagBoxes = allUsers[i].bagContent;
        let total = 0;
        for(let i = 0; i < bagBoxes.length; i++) {
          let multiplication = bagBoxes[i].prixUnité * bagBoxes[i].quantity;
          total += multiplication;
        }
        this.totalPrix.next(total);
      }    
    }
  }
}
