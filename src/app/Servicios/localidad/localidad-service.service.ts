import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalidadServiceService {

  url = "https://www.datos.gov.co/resource/xdk5-pm3f.json?c_digo_dane_del_departamento=";  

  constructor(public http: HttpClient) {
    console.log('Hello LocalidadServiceProvider Provider');
  }

  headers: HttpHeaders = new HttpHeaders({
     "Content-type":"application/json"
  });

  getMunicipio(municipio){
    let url = this.url+municipio;
    console.log(url);
    return this.http.get(url);
  }

  getListMunicipio(municipio){
    return  this.getMunicipio(municipio);    
  }
}
