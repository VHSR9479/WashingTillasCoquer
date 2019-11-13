import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url = "http://localhost:8080/usuario/"; 
  headers: HttpHeaders = new HttpHeaders({
    "Content-type":"application/json"
  });
  constructor(public http: HttpClient ) { }

  mostrarAlerta(){
    alert("Ingreso");
  }

  getUser(user,pass){
    let url  = this.url+"all";
    return this.http.get(url);  
  }

  postUser(body){
    let url  = this.url+"insertar";
    return this.http.post(url,body,{headers:this.headers});
  }
}
