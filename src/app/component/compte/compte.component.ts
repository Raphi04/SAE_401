import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})
export class CompteComponent implements OnInit {

  historique : any = [];
  historiqueEmpty = true;
  historiqueEmpty2 = true;

  constructor(private nav : NavService, private router : Router) {}

  ngOnInit(): void {
    let currentUser = localStorage.getItem("currentUser") || "";
    if (currentUser == "") {
      this.router.navigate([`/app-connexion`]);
    }
    this.nav.changeActive("compte");

    this.getHistorique();
  }

  getHistorique() {
    //Récupération de l'historique
    let allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");
    let currentUser = localStorage.getItem("currentUser");
    
    for(let i = 0; i < allUsers.length; i++) {
      if(allUsers[i].email == currentUser) {
        this.historique = allUsers[i].historique;
      }
    }
    
    if(this.historique !== undefined) {
      if(this.historique.length > 0) {
        this.historiqueEmpty = false;
        this.historiqueEmpty2 = false
      } else {
        this.historiqueEmpty = true;
        this.historiqueEmpty2 = true
      }  
    } else {
      this.historiqueEmpty = true;
      this.historiqueEmpty2 = true
    }
  }

  Annuler(id: number) {
    let allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");
    let currentUser = localStorage.getItem("currentUser");

    for(let i = 0; i < allUsers.length; i++) {
      if(allUsers[i].email == currentUser) {
        if(allUsers[i].historique[id].commandeNumber == allUsers[i].historiqueLastNumber) {
          allUsers[i].historiqueLastNumber = allUsers[i].historiqueLastNumber - 1;
        }
        allUsers[i].historique.splice(id, 1);
      }
    }

    //Mise à jour de allUsers
    localStorage.setItem("allUsers", JSON.stringify(allUsers));

    this.getHistorique();
  }

  disconnectUser(): void {
    localStorage.removeItem("currentUser");
    this.router.navigate([`/app-demarrage`]);
  }
}
