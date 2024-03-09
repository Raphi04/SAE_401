import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BoxService } from '../../services/box.service';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  recommandations : any[] = [];
  constructor(private http : HttpClient, private box : BoxService, private nav : NavService) {
    this.loadRecommandation();
  }

  selectBoxID(id : number) {
    this.box.selectBox(id);
  }

  changeNavActive(value: string) {
    this.nav.changeActive(value);
  }

  loadRecommandation() {
    this.http.get("http://localhost/MMI2/SAE_401/api/traitement/read.php").subscribe((recommandations: any) => {
      this.recommandations = recommandations;
    })
  }
}
