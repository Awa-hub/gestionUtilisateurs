import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ServiceService } from '../MesServices/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private nom: String;
  private prenom: String;
  private email: String;
  private password: String;

  constructor(
    private auth: AngularFireAuth,
    private store: AngularFirestore, private router: Router, public service: ServiceService) { }

  ngOnInit() {
  }

  logForm(form){
    this.nom = form.value.nom
    this.prenom = form.value.prenom
    this.email = form.value.email
    this.password = form.value.password

    this.auth.createUserWithEmailAndPassword(form.value.email, form.value.password).then(
      (data) => {
        this.store.collection('utilisateur').doc(data.user.uid).set({
          "nom": this.nom,
          "prenom": this.prenom,
          "email": this.email,
          "password": this.password
        }).then(() => {
          this.router.navigate([''])
          this.service.myMessage("Vous êtes inscrit","success")
        }).catch(error =>{
          console.log('Non enregistrez...')
        })
      }
    ).catch(error =>{
      console.log(error.message)
    })
  }

}
