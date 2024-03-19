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
  allBox_DB = [];
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
    this.loadBoxDB();
    let boxes_Local = [];
    let allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");

    for(let i = 0; i < allUsers.length; i++) {
      console.log(allUsers[i].bagContent);
      if(allUsers[i].email == currentUser) {
        boxes_Local = allUsers[i].bagContent;
      }
    }
  }

  ngOnDestroy(): void {
    this.header.greenBag(false);
  }

  loadBoxDB() {
    this.http.get("http://localhost/MMI2/SAE_401/api/traitement/read.php").subscribe((boxes: any ) =>{
      this.allBox_DB = boxes;
    })  
  }


}
