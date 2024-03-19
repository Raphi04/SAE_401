import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from '../../services/header.service';
import { BoxService } from '../../services/box.service';
import { BagService } from '../../services/bag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnDestroy{

  showHeader : boolean = true;
  subscription : Subscription;

  itemNumber : any;
  boxNumberSubscription : Subscription;

  isActive : boolean = false;
  bagSubscription : Subscription;

  constructor(private headerService : HeaderService, private bag : BagService) {
    this.subscription = this.headerService.showHeader.subscribe((value) => {
    this.showHeader = value
    })
    
    this.boxNumberSubscription = this.bag.bagItemNumber.subscribe((value) => {
      this.itemNumber = value;
    })

    this.bagSubscription = this.headerService.activeBag.subscribe((value) => {
      this.isActive = value;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.boxNumberSubscription.unsubscribe();
    this.bagSubscription.unsubscribe();
  }
}
