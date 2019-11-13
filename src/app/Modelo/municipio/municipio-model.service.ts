import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MunicipioModelService {
  id: number;
  nombre:string;
  id_dep:number;
  constructor() { }
}
