import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { relative } from 'path';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllPets(){
    return this._http.get('/api/pets');
  }

  getPetById(id){
    return this._http.get(`/api/pet/${id}`);
  }

  createPet(post){
    return this._http.post('/api/pets', post);
  }

  updatePet(post){
    return this._http.put('/api/pets', post);
  }

  likePet(post){
    return this._http.put('/api/likes/', post);
  }

  deletePet(id){
    return this._http.delete(`/api/pets/${id}`);
  }
}
