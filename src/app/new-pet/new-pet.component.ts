import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'

import { HttpService } from '../http.service';


@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['../app.component.css']
})
export class NewPetComponent implements OnInit {

  title = "Know of a pet needing a home?";

  newPet = {
    name: "",
    type: "",
    description: "",
    skills: ["", "", ""]
  }

  messages = {
    nameShort: { display: false, message: "Pet name must have at least 3 characters" },
    nameLong: { display: false, message: "Pet name cannot exceed 45 characters" },

    typeShort: { display: false, message: "Pet type must have at least 3 characters" },
    typeLong: { display: false, message: "Pet type cannot exceed 45 characters" },

    descShort: { display: false, message: "Description must have at least 3 characters" },
    descLong: { display: false, message: "Description cannot exceed 280 characters" },

    skillShort: { display: false, message: "Skills must have at least 3 characters or be left blank" },
    skillLong: { display: false, message: "Skills cannot exceed 45 characters" },

    entryExists: { display: false, message: "Pet already in database, please choose a different name!"},

  }

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  createPetViaService() {
    let observable = this._httpService.createPet(this.newPet);
    observable.subscribe(data => {
      console.log("Pet processing: ", data);
      if(data['existed'] == true){
        this.messages.entryExists.display = true;
      }
      else{
        this.messages.entryExists.display = false;
        if(data['success'] == true){
          this._router.navigate([`/pets`]); 
        }
        else{
          console.log(data);
        }
      }
    });
  }

  toggleMessageDisplay(messageName: string) {
    this.messages[`${messageName}`]['display'] = true;
    console.log(`${messageName}: ${this.messages[`${messageName}`]['display']}`)
  }

}
