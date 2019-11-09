import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor( private route: Router) { }
  private tipo:"";

  ngOnInit() {
  }
  onLogin(){
    this.route.navigateByUrl("/login");
  }

  changeDepartamento(){

  }

}
