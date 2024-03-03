import { Component, OnDestroy } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnDestroy {
  showNav : boolean = true;
  subscription : Subscription;
  constructor(private navService : NavService) {
    this.subscription = this.navService.showNav.subscribe((value) => 
    this.showNav = value
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
