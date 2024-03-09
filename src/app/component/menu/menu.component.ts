import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BoxService } from '../../services/box.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  //Définition de la variable qui permet de récupérer les boxes
  boxes: any[] = [];

  constructor(private http : HttpClient, private box : BoxService) {
    this.loadBoxes();
  }

  selectBoxID(id : number) {
    this.box.selectBox(id);
  }

  loadBoxes() {
    this.http.get("http://localhost/MMI2/SAE_401/api/traitement/read.php").subscribe((boxes: any ) =>{
      this.boxes = boxes;
    })
  }
}
