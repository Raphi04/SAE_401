import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { NavService } from '../../services/nav.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent implements OnInit, OnDestroy {
  constructor(private headerService : HeaderService, private navService : NavService, private router : Router, private form : FormBuilder) {}

  //Création du formulaire
  connexionForm = this.form.group({
    email : ["", [Validators.required, Validators.email]],
    mdp : ["", [Validators.required, Validators.minLength(8)]]
  });

  isSubmited = false;
  errorForm = true;
  emailErrorMessage = "";
  mdpErrorMessage = "";
  identifiantErrorMessage = "";

  onSubmit() {
    this.isSubmited = true;
    this.checkError("motDePasse");
    this.checkError("email");

    if(!this.errorForm) {
      //Get all user
      let allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");

      //Flag de détection de l'adresse mail
      let isInArray = false;

      if(Object.keys(allUsers).length > 0) {
        for(let i = 0; i < allUsers.length; i++) {
          if(allUsers[i].email == this.connexionForm.get("email")?.value) {
            isInArray = true;
            if(allUsers[i].mdp == this.connexionForm.get("mdp")?.value) {
              localStorage.setItem("currentUser", this.connexionForm.get("email")?.value || "");
              this.router.navigate([`/app-accueil`])
            } else {
              this.identifiantErrorMessage = "Identifiants de connexion incorrect";
            }
          }
        }
        if(!isInArray) {
          this.identifiantErrorMessage = "Identifiants de connexion incorrect";
        }
      } else {
        this.identifiantErrorMessage = "Identifiants de connexion incorrect";
      }
    }
  }

  checkError(input: string) {
    if(this.identifiantErrorMessage !== "") {
      return "errorInput";
    }

    const myInput = this.connexionForm.get(input);

    switch(input) {
      case "email" :
        if(myInput?.invalid && (myInput.dirty || myInput.touched ||this.isSubmited)) {
          if(myInput?.errors?.["email"]) {
            this.emailErrorMessage = "Veuillez saisir un email correct";
          } else {
            this.emailErrorMessage = "Veuillez remplir ce champ";
          }
          this.errorForm = true;
          return "errorInput";
        } else {
          this.emailErrorMessage = "";
          this.errorForm = false;
          return "noError";
        }

      case "mdp" :
        if(myInput?.invalid && (myInput?.dirty || myInput?.touched || this.isSubmited)) {
          if(myInput?.errors?.["minlength"]) {
            this.mdpErrorMessage = "Au moins 8 caractères sont attendus";
          } else {
            this.mdpErrorMessage = "Veuillez remplir ce champ";
          }
          this.errorForm = true;
          return "errorInput";
        } else {
          this.mdpErrorMessage = "";
          this.errorForm = false;
          return "noError";
        }
    }
    return "noError";
  }

  ngOnInit(): void {
    this.headerService.hide();
    this.navService.hide();

    let currentUser = localStorage.getItem("currentUser") || "";
    
    //Si on est déjà connecté on nous renvoie à l'accueil
    if(currentUser !== "") {
      this.router.navigate(["/app-accueil"]);
    }
  }

  ngOnDestroy(): void {
    this.headerService.display();
    this.navService.display();
  }
}
