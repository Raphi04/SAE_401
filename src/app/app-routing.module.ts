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
import { BoxComponent } from './component/box/box.component';
import { BagComponent } from './component/bag/bag.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';

const routes: Routes = [
  { path: "app-header", component: HeaderComponent },
  { path: "app-nav", component: NavComponent },
  { path: "app-menu", component: MenuComponent },
  { path: "app-box", component: BoxComponent},
  { path: "app-compte", component: CompteComponent },
  { path: "app-accueil", component: AccueilComponent },
  { path: "app-demarrage", component: DemarrageComponent },
  { path: "app-connexion", component: ConnexionComponent },
  { path: "app-inscription", component: InscriptionComponent },
  { path: "app-bag", component: BagComponent },
  { path: "app-rgpd", component : RgpdComponent },
  { path: "", redirectTo: "app-demarrage", pathMatch: 'full'},
  { path: "**", redirectTo: "app-connexion" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
