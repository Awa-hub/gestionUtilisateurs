import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  collections:any

  constructor(
      private auth: AngularFireAuth,
      private toastMessages: ToastController,
      private telecharge: LoadingController,
      private router: Router,
      private strore: AngularFirestore) { }

  
  async myMessage(message, color){
    const msg = await this.toastMessages.create({
      message: message,
      color: color,
      position: 'top',
      duration: 2000
    });

    msg.present();
  }


  async login(email, password)
  {
    const telechargement = await this.telecharge.create( 
      {
      message: 'Chargement',
      spinner: 'crescent',
      duration: 1000
    })
     telechargement.present()
    this.auth.signInWithEmailAndPassword(email, password).then((data) => {
      telechargement.dismiss()
      this.router.navigate(['home'])
      this.myMessage("Connected", "success" )
    }).catch(error => {
      telechargement.dismiss()
      this.myMessage("Non Connected", "danger" )
    })
  }

  getUsers()
  {
    this.collections=this.strore.collection('utilisateur')
    return this.collections.valueChanges()

  }
  signoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.auth.currentUser) {
        this.auth.signOut()
          .then(() => {
            console.log('Sign out');
            resolve();
          }).catch(() => {
          reject();
        });
      }
    })
  }
  
  
}
