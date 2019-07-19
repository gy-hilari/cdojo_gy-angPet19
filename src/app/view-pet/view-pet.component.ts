import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HttpService } from '../http.service';


@Component({
  selector: 'app-view-pet',
  templateUrl: './view-pet.component.html',
  styleUrls: ['../app.component.css']
})
export class ViewPetComponent implements OnInit {

  title = "";
  pet = {};
  likeLimit = false;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.getPetViaService(params['id']);
    });
    this.likeLimit = false;
  }

  getPetViaService(id) {
    let observable = this._httpService.getPetById(id);
    observable.subscribe(data =>{
      console.log("Pet Processing: ", data);
      this.pet = data;
      this.title = `Details about ${data['name']}`;
    }); 
  }

  deletePetViaService(){
    let observable = this._httpService.deletePet(this.pet['_id']);
    observable.subscribe(data =>{
      console.log("Adopt Pet Processing: ", data);
    });
    this._router.navigate(['/pets']);
  }

  addLikeOfPetViaService(){
    if(this.likeLimit == false){
      let observable = this._httpService.likePet(this.pet);
      observable.subscribe(data => {
        console.log("Pet Like Processing: ", data);
      });
      this.likeLimit = true;
      this.getPetViaService(this.pet['_id']);
    }
    else{
      console.log("Like limit reached...");
    }
  }

}
