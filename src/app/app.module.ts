import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { MenuComponent } from './component/menu/menu.component';
import { CompteComponent } from './component/compte/compte.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { DemarrageComponent } from './component/demarrage/demarrage.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { MainComponent } from './component/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MenuComponent,
    CompteComponent,
    AccueilComponent,
    DemarrageComponent,
    ConnexionComponent,
    InscriptionComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
