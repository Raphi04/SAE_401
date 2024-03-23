import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { filter} from '../../filter.js';
import { BoxService } from '../../services/box.service';
import { NavService } from '../../services/nav.service';
import { Router } from '@angular/router';
import { BagService } from '../../services/bag.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  //Définition de la variable qui permet de récupérer les boxes
  boxes: any[] = [];

  constructor(private http : HttpClient, private box : BoxService, private nav : NavService, private router : Router, private bag : BagService) {
    this.loadBoxes();
  }

  ngOnInit(): void {
    this.bag.checkNewBag();
    this.nav.changeActive("menu");
    let currentUser = localStorage.getItem("currentUser") || "";
    if (currentUser == "") {
      this.router.navigate([`/app-connexion`]);
    }
  }

  selectBoxID(id : number) {
    this.box.selectBox(id);
    this.router.navigate([`/app-box`]);
  }

  loadBoxes() {
    this.http.get("https://api-sushi-ko.alwaysdata.net/traitement/read.php").subscribe((boxes: any ) =>{
      this.boxes = boxes;
    })
  }

  filtre(filtre:string){
    filter(filtre)
  }
}
