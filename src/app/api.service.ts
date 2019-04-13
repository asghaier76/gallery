import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private _http: HttpClient) {

  }

  // Users Accounts API Endpoint

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this._http.get(this.apiUrl+'users').subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  // Albums API Endpoints

  getAlbums() {
    return new Promise((resolve, reject) => {
      this._http.get(this.apiUrl+'albums').subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  // Photos API Endpoints

  getPhotos() {
    return new Promise((resolve, reject) => {
      this._http.get(this.apiUrl+'photos').subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }


}
