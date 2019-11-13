import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  url = "http://localhost:8080/"; 
  headers: HttpHeaders = new HttpHeaders({
    "Content-type":"application/json"
  });
  constructor(public http: HttpClient ) { }

  getTipoCalzadoAll() {
    const Url = this.url + 'tipoCalzado/all';
    return this.http.get(Url);
  }

}

