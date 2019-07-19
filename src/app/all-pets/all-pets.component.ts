import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HttpService } from '../http.service';


@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['../app.component.css']
})
export class AllPetsComponent implements OnInit {

  title = "These pets are looking for a home!";
  pets = [];


  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllPetsViaService();
  }

  getAllPetsViaService() {
    let observable = this._httpService.getAllPets();
    observable.subscribe(data => {
      console.log("Pets Processing: ", data)
      this.pets = data['data'];
    });
  }

}
