import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnDestroy{
  showHeader : boolean = true;
  subscription : Subscription;
  constructor(private headerService : HeaderService) {
    this.subscription = this.headerService.showHeader.subscribe((value) =>
    this.showHeader = value
    )}

    ngOnDestroy(): void {
      this.subscription.unsubscribe;
    }
}
