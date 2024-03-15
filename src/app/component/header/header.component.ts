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

  constructor(private headerService : HeaderService, private bag : BagService) {
    this.subscription = this.headerService.showHeader.subscribe((value) => {
    this.showHeader = value
    })
    
    this.boxNumberSubscription = this.bag.bagItemNumber.subscribe((value) => {
      this.itemNumber = value;
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
