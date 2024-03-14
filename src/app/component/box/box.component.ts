import { Component, OnDestroy, OnInit } from '@angular/core';
import { BoxService } from '../../services/box.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})

export class BoxComponent implements OnInit, OnDestroy{
  boxID: number = 0;
  subscription : Subscription;
  boxInfo: any[] = [];

  constructor(private box : BoxService, private http : HttpClient, private router : Router, private nav : NavService) {
    this.subscription = this.box.selectID.subscribe((value) => {
      this.boxID = value;
    })
    this.loadBox();
    if(JSON.stringify(this.boxID) == "0") {
      this.router.navigateByUrl("/app-menu");
    }
  }
  
  ngOnInit(): void {
    this.nav.changeActive("menu");
    let currentUser = localStorage.getItem("currentUser") || "";
    if (currentUser == "") {
      this.router.navigate([`/app-connexion`]);
    }
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  loadBox() {
    this.http.get("http://localhost/MMI2/SAE_401/api/traitement/read.php?id="+this.boxID).subscribe((boxes: any ) => {
      this.boxInfo = boxes;
    })
  }
}
