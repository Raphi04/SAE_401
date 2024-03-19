import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavService } from '../../services/nav.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrl: './bag.component.css'
})
export class BagComponent implements OnInit, OnDestroy{
  bagBoxes = [];
  constructor(private http : HttpClient, private router : Router, private nav : NavService, private header : HeaderService) {}

  ngOnInit(): void {
    let currentUser = localStorage.getItem("currentUser") || "";
    if (currentUser == "") {
      this.router.navigate([`/app-connexion`]);
    }
    this.nav.changeActive("bag");
    this.header.greenBag(true);

    //Récupération des informations nécessaires
    let allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");
    let userID = 0;

    for(let i = 0; i < allUsers.length; i++) {
      if(allUsers[i].email == currentUser) {
        userID = i;
      }
    }

    this.bagBoxes = allUsers[userID].bagContent[0];
    console.log(this.bagBoxes)
  }

  ngOnDestroy(): void {
    this.header.greenBag(false);
  }
}
