import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})
export class CompteComponent implements OnInit {
  constructor(private nav : NavService, private router : Router) {}

  ngOnInit(): void {
    let currentUser = localStorage.getItem("currentUser") || "";
    if (currentUser == "") {
      this.router.navigate([`/app-connexion`]);
    }
    this.nav.changeActive("compte");
  }

  disconnectUser(): void {
    localStorage.removeItem("currentUser");
    this.router.navigate([`/app-connexion`]);
  }
}
