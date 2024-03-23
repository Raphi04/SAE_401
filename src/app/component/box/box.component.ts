import { Component, OnDestroy, OnInit } from '@angular/core';
import { BoxService } from '../../services/box.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavService } from '../../services/nav.service';
import { BagService } from '../../services/bag.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})

export class BoxComponent implements OnInit, OnDestroy{
  boxID: number = 0;
  subscription : Subscription;
  boxInfo: any[] = [];

  maxLength : number = 10;
  minLength : number = 1;
  bagItem : number = 0;
  bagSubscription : Subscription;

  constructor(private box : BoxService, private http : HttpClient, private router : Router, private nav : NavService, private bag : BagService, private form : FormBuilder) {

    this.subscription = this.box.selectID.subscribe((value) => {
      this.boxID = value;
    });

    this.bagSubscription = this.bag.bagItemNumber.subscribe((value) => {
      this.bagItem = value;
      this.maxLength = 10 - this.bagItem
      if(this.maxLength == 0) {
        this.addItemForm.get("itemNumber")?.setValue(0);
        this.minLength = 0;
      }
    });

    this.loadBox();
    if(JSON.stringify(this.boxID) == "0") {
      this.router.navigateByUrl("/app-menu");
    }
  }

  addItemForm = this.form.group({
    itemNumber : [{value : 1, disabled: true}]
  });

  add() {
    let currentValue = this.addItemForm.get("itemNumber")?.value as number;
    if(currentValue !== 0 && currentValue !== this.maxLength) {
      currentValue++;
    }
    this.addItemForm.get("itemNumber")?.setValue(currentValue);
  }

  minus() {
    let currentValue = this.addItemForm.get("itemNumber")?.value as number;
    if(currentValue !== 0 && currentValue !== this.minLength) {
      currentValue--;
    }
    this.addItemForm.get("itemNumber")?.setValue(currentValue);
  }

  onSubmit() {
    //Mise à jour du nombre d'item dans le bag
    let itemNumber = this.addItemForm!.get("itemNumber")?.value;
    let newBagCount = this.bagItem + (itemNumber as number);
    this.bag.changeBoxNumber(newBagCount);
    
    //Récupération des données utilisateurs
    let allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");
    let currentUser = localStorage.getItem("currentUser");
    let userID = 0;

    //On cherche l'ID correspondant à l'utilisateur dans le tableau
    for(let i = 0; i < allUsers.length ; i++) {
      if(allUsers[i].email == currentUser) {
        userID = i;
      }
    }

    //On ajoute/modifie la clé bag pour mettre le nouveau nombre
    allUsers[userID].bag = newBagCount;

    //Si on a ajouter une box dans le bag
    if(itemNumber as number > 0) {
      const user = allUsers[userID];

      //On créer une variable pour stocker les informations
      let bagItem = {
        itemID : this.boxID,
        nom : this.boxInfo[0].nom,
        aliments : this.boxInfo[0].aliments,
        prixUnite : this.boxInfo[0].prix,
        quantity : itemNumber
      };
      
      //Si bagContent existe, alors on push directement l'item de dedans sinon on le créer
      if("bagContent" in user) {

        //On regarde si la box existe déjà dans boxContent
        let alreadyExists;
        let boxID_InBag = 0;
        for(let i = 0; i < user.bagContent.length; i++) {
          if(user.bagContent[i].itemID == this.boxID) {
            alreadyExists = true;
            boxID_InBag = i;
          }
        }

        //Si elle existe on modifie juste la quantité, sinon on la met dans bagContent
        if(alreadyExists) {
          user.bagContent[boxID_InBag].quantity += itemNumber;
          user.bagContent[boxID_InBag].nom = this.boxInfo[0].nom;
          user.bagContent[boxID_InBag].aliments = this.boxInfo[0].aliments;
          user.bagContent[boxID_InBag].prixUnite = this.boxInfo[0].prix;
        } else {
          user.bagContent.push(bagItem)
        }

      } else {
        user.bagContent = [];
        user.bagContent.push(bagItem)
      }

      this.router.navigate([`/app-menu`]);
    }

    //On applique la modification
    localStorage.setItem("allUsers", JSON.stringify(allUsers));

  }
  
  ngOnInit(): void {
    this.bag.checkNewBag();
    this.nav.changeActive("menu");
    let currentUser = localStorage.getItem("currentUser") || "";
    if (currentUser == "") {
      this.router.navigate([`/app-connexion`]);
    }
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.bagSubscription.unsubscribe();
  }
  
  loadBox() {
    this.http.get("https://api-sushi-ko.alwaysdata.net/traitement/read.php?id="+this.boxID).subscribe((boxes: any ) => {
      this.boxInfo = boxes;
    })
  }
}
