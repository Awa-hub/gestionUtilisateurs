import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../MesServices/service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public donnee: any
  public search: any

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(
      data=>{
        this.donnee=data
      }
    )
  }
  

}
