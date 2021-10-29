import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../MesServices/service.service';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  userDetail: string;
itemsCollect: AngularFirestoreCollection;
items: Observable<any[]>; 

  user: any;
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private authService: ServiceService,
    private router: Router
  ) {
    this.auth.authState.subscribe(auth =>{
      if(auth){
        this.firestore.collection('utilisateur').doc(auth.uid).valueChanges().subscribe(result => {
          this.user = result;
          console.log(this.user);
        });
      }
    });
  }

  ngOnInit() {}
}