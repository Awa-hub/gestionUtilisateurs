import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { FirebaseApp } from '@angular/fire/app';
import { ServiceService } from '../MesServices/service.service';

@Component({
  selector: 'app-reinitialise',
  templateUrl: './reinitialise.page.html',
  styleUrls: ['./reinitialise.page.scss'],
})
export class ReinitialisePage implements OnInit {
  user: any
  userConnnect: FirebaseApp

  constructor(private auth: AngularFireAuth, private fire: AngularFirestore, private route: Router,
    public service: ServiceService) { }

  ngOnInit() {
  }
  updatePass(pass){
    if(pass.value.old_pass!='' && pass.value.new_pass!='' && pass.value.conf_new!='' ){
      this.auth.authState.subscribe(auth =>{
        if(auth){
          this.fire.collection('utilisateur').doc(auth.uid).valueChanges().subscribe(result => {
            this.user = result;
            if(this.user.password == pass.value.old_pass){
              if(pass.value.new_pass == pass.value.conf_new ){
                auth.updatePassword(pass.value.new_pass);
                this.fire.collection('utilisateur').doc(auth.uid).update({
                  'password': pass.value.new_pass
                });
                this.route.navigate(['home']);
                this.service.myMessage("Mot de passe modifier","success")

              }else{

                console.log("le nouveau mot de passe et le mot de passe confimer sont different");
              }
              this.service.myMessage("le nouveau mot de passe et le mot de passe confimer sont different","danger")
            }else {
              console.log("Ancien mot de passe incorrecte");
            }
          });
        }else{
          console.log("non encore connecter");
        }
      })
    }else{
      console.log(" vous n'etes pas connecter");
    }
  }

}
