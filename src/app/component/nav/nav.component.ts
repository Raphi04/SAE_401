import { Component, OnDestroy, OnInit } from '@angular/core';
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

  activeNav : string = "home";
  subscriptionActive : Subscription;

  constructor(private navService : NavService) {
    this.subscription = this.navService.showNav.subscribe((value) => {
      this.showNav = value;
    });

    this.subscriptionActive = this.navService.navActive.subscribe((value) => {
      this.activeNav = value;
    });
  }

  changeActiveNav(value : string) {
    this.navService.changeActive(value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.navService.changeActive("");
  }
}
