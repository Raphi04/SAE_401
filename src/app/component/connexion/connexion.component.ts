import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent implements OnInit, OnDestroy {
  constructor(private headerService : HeaderService, private navService : NavService) {}

  ngOnInit(): void {
    this.headerService.hide();
    this.navService.hide();
  }

  ngOnDestroy(): void {
    this.headerService.display();
    this.navService.display();
  }
}
