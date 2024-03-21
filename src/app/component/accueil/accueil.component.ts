import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BoxService } from '../../services/box.service';
import { NavService } from '../../services/nav.service';
import { Router } from '@angular/router';
import { BagService } from '../../services/bag.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit {
  recommandations : any[] = [];
  constructor(private http : HttpClient, private box : BoxService, private nav : NavService, private router : Router, private bag : BagService) {
    this.loadRecommandation();
  }

  ngOnInit(): void {
    let currentUser = localStorage.getItem("currentUser") || "";
    if (currentUser == "") {
      this.router.navigate([`/app-connexion`]);
    }
    this.nav.changeActive("home");
    this.bag.checkNewBag();
  }

  selectBoxID(id : number) {
    this.box.selectBox(id);
  }

  changeNavActive(value: string) {
    this.nav.changeActive(value);
  }

  loadRecommandation() {
    this.http.get("https://api-sushi-ko.alwaysdata.net/traitement/read.php").subscribe((recommandations: any) => {
      this.recommandations = recommandations;
    })
  }
}
