import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../../services/nav.service';
import { HeaderService } from '../../services/header.service';
import { Subscription } from 'rxjs';
import { BagService } from '../../services/bag.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrl: './bag.component.css'
})
export class BagComponent implements OnInit, OnDestroy{

  bagBoxes : any[] = [];
  totalPrix : number = 0;  
  subscription : Subscription
  noBoxFound: boolean = false;

  constructor(private router : Router, private nav : NavService, private header : HeaderService, private bag : BagService) {
    this.subscription = this.bag.totalPrix.subscribe((value) => {
      this.totalPrix = value;
    })
  }

  ngOnInit(): void {
    let currentUser = localStorage.getItem("currentUser") || "";
    if (currentUser == "") {
      this.router.navigate([`/app-connexion`]);
    }
    this.nav.changeActive("bag");
    this.header.greenBag(true);
    this.bag.checkNewBag();

    //Récupération des informations nécessaires
    let allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");
    let userID = 0;

    for(let i = 0; i < allUsers.length; i++) {
      if(allUsers[i].email == currentUser) {
        userID = i;
      }
    }
    
    if(allUsers[userID].hasOwnProperty("bagContent")) {
      this.bagBoxes = allUsers[userID].bagContent;
    } else {
      this.bagBoxes = [];
    }

    this.bag.calculTotal();
    this.checkBox();
  }

  ngOnDestroy(): void {
    this.header.greenBag(false);
  }

  //On supprime la box
  suppBox(id : any) {

    //Suppression de la box dans bagBoxes
    for(let i = 0 ; i < this.bagBoxes.length; i++) {
      if(this.bagBoxes[i].itemID == id) {
        this.bagBoxes.splice(i, 1);
      }
    }
    
    //Mise à jour du nombre d'item dans le bag
    let newCount: number = 0;
    for(let i = 0 ; i < this.bagBoxes.length; i++) {
      newCount += this.bagBoxes[i].quantity;
    }
    
    //Mise à jour de allUser
    let allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");
    let currentUser = localStorage.getItem("currentUser");

    for(let i = 0; i < allUsers.length; i++) {
      if(allUsers[i].email == currentUser) {
        allUsers[i].bagContent = this.bagBoxes;
        allUsers[i].bag = newCount;
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
      }
    }

    this.bag.calculTotal();
    this.bag.checkNewBag();
    this.checkBox();
  }

  checkBox() {
    if(this.bagBoxes.length == 0) {
      this.noBoxFound = true;
    }
  }

  Commander() {
    let allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");
    let currentUser = localStorage.getItem("currentUser");
    let commandeNumber;

    for(let i = 0; i < allUsers.length; i++) {
      if(allUsers[i].email == currentUser) {
        if(allUsers[i].hasOwnProperty("historiqueLastNumber")) {
          allUsers[i].historiqueLastNumber = allUsers[i].historiqueLastNumber + 1
          commandeNumber = allUsers[i].historiqueLastNumber;
        } else {
          allUsers[i].historiqueLastNumber = 1;
          commandeNumber = allUsers[i].historiqueLastNumber;
        }
      }
    }


    //Création du contenu de historique
    let historiqueItem = {
      boxes : this.bagBoxes,
      price : this.totalPrix,
      commandeNumber : commandeNumber
    };


    //On récupère les données de l'utilisateur actuelle
    for(let i = 0; i < allUsers.length; i++) {
      if(allUsers[i].email == currentUser) {
        if(!allUsers[i].hasOwnProperty("historique")) { //Si l'historique n'existe pas, on le créer, sinon on le met à jour
          allUsers[i].historique = [];
          allUsers[i].historique.push(historiqueItem);
        } else {
          allUsers[i].historique.push(historiqueItem);
        }
        allUsers[i].bagContent = [];
        allUsers[i].bag = 0;

        //Mise à jour de allUser
        localStorage.setItem("allUsers", JSON.stringify(allUsers));

        //Redirection
        this.bag.checkNewBag();
        this.router.navigate([`/app-compte`])
      }
    }
  }
}
