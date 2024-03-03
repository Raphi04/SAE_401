import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavService } from '../../services/nav.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent implements OnInit, OnDestroy{
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
