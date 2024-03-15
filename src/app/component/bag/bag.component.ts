import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrl: './bag.component.css'
})
export class BagComponent implements OnInit{
  allBox_DB = [];
  bagBoxes = [];
  constructor(private http : HttpClient, private router : Router, private nav : NavService) {}

  ngOnInit(): void {
    let currentUser = localStorage.getItem("currentUser") || "";
    if (currentUser == "") {
      this.router.navigate([`/app-connexion`]);
    }
    this.nav.changeActive("bag");

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

  loadBoxDB() {
    this.http.get("http://localhost/MMI2/SAE_401/api/traitement/read.php").subscribe((boxes: any ) =>{
      this.allBox_DB = boxes;
    })  
  }


}
