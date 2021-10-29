import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../MesServices/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userEmail: any
  public userPassword: any

  constructor(private services: ServiceService ) { }

  ngOnInit() {
  }

  logForm(form){
    console.log(form.value.login);
    console.log(form.value.password);
    this.services.login(form.value.login, form.value.password);


  }

}
