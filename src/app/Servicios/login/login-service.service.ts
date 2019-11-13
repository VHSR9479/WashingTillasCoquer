import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url = 'http://localhost:8080/usuario/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
  });
  constructor(public http: HttpClient) { }

  mostrarAlerta() {
    alert('Ingreso');
  }

  getUser(user, pass) {
    const Headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded'
    });
    const body = new HttpParams()
      .set('email', user)
      .set('password', pass);
    const Url = this.url + 'login';
    return this.http.post(Url, body.toString(), { headers: Headers });
  }

  postUser(body) {
    const url = this.url + 'insertar';
    return this.http.post(url, body, { headers: this.headers });
  }
}
