import { Component, OnInit } from '@angular/core';
import { BoxService } from '../../services/box.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})

export class BoxComponent {
  boxID: number = 0;
  subscription : Subscription;
  boxInfo: any[] = [];

  constructor(private box : BoxService, private http : HttpClient, private router : Router) {
    this.subscription = this.box.selectID.subscribe((value) => {
      this.boxID = value;
    })
    this.loadBox();
    if(JSON.stringify(this.boxID) == "0") {
      this.router.navigateByUrl("/app-menu");
    }
  }

  loadBox() {
    this.http.get("http://localhost/MMI2/SAE_401/api/traitement/read.php?id="+this.boxID).subscribe((boxes: any ) =>{
      this.boxInfo = boxes;
    })
  }
}
