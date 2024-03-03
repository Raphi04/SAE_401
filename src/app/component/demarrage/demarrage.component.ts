import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-demarrage',
  templateUrl: './demarrage.component.html',
  styleUrl: './demarrage.component.css'
})
export class DemarrageComponent implements OnInit, OnDestroy {
  constructor (private headerService : HeaderService, private navService : NavService) {}

  ngOnInit(): void {
    this.headerService.hide();
    this.navService.hide();
  }

  ngOnDestroy(): void {
    this.headerService.display();
    this.navService.display();
  }
}
