import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HttpService } from '../http.service';


@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['../app.component.css']
})
export class EditPetComponent implements OnInit {

  title = "Edit this pet";

  targetId = "";

  newPet = {
    _id: "",
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

  }



  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.getPetViaService(params['id']);
      this.targetId = params['id'];
    });
  }

  getPetViaService(id) {
    let observable = this._httpService.getPetById(id);
    observable.subscribe(data => {
      console.log("Pet Processing: ", data);

      this.newPet['_id'] = data['_id'];
      this.newPet['name'] = data['name'];
      this.newPet['type'] = data['type'];
      this.newPet['description'] = data['description'];
      this.newPet['skills'] = data['skills'];

      this.title = `Details about ${data['name']}`;
    });
  }

  updatePetViaService() {
    let observable = this._httpService.updatePet(this.newPet);
    observable.subscribe(data => {
      console.log("Pet Update Processing: ", data);
      if(data['success'] == true){
        this._router.navigate([`/pets/${this.targetId}`]);
      }
      else{
        console.log(data);
      }
    });
  }

  toggleMessageDisplay(messageName: string) {
    this.messages[`${messageName}`]['display'] = true;
    console.log(`${messageName}: ${this.messages[`${messageName}`]['display']}`)
  }


}
