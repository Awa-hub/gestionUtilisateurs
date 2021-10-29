import { Component } from '@angular/core';
import { ServiceService } from '../MesServices/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public donnee: any

  constructor(private service: ServiceService, private router: Router) {
    this.service.getUsers().subscribe(
      data=>{
        this.donnee=data
      }
    )
  }
  signOut() {
    this.service.signoutUser()
      .then(res => {
        this.router.navigateByUrl('login');
      })
      .catch(error => {
        console.log(error);
      });
  }

}
