import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { MenuComponent } from './component/menu/menu.component';
import { CompteComponent } from './component/compte/compte.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { DemarrageComponent } from './component/demarrage/demarrage.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [
  { path: "", component: DemarrageComponent },
  { path: "app-header", component: HeaderComponent },
  { path: "app-nav", component: NavComponent },
  { path: "app-menu", component: MenuComponent },
  { path: "app-compte", component: CompteComponent },
  { path: "app-accueil", component: AccueilComponent },
  { path: "app-demarrage", component: DemarrageComponent },
  { path: "app-connexion", component: ConnexionComponent },
  { path: "app-inscription", component: InscriptionComponent },
  { path: "app-main", component: MainComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
