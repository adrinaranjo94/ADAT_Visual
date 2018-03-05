import { Component, OnInit } from '@angular/core';

import {IberiaService} from '../../services/iberia.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  origen:string = "";
  destino:string = "";

  company:Boolean = false;
  price:Boolean = false;

  vuelosDisponibles:any={};

  mostrar:Boolean = false;
  constructor( public _iberia : IberiaService ) { }

  ngOnInit() {
  }

  changeField() {
    this.origen = (<HTMLInputElement>document.getElementById("origen")).value;
    this.destino = (<HTMLInputElement>document.getElementById("destino")).value;
    (<HTMLInputElement>document.getElementById("origen")).value = this.destino;
    (<HTMLInputElement>document.getElementById("destino")).value = this.origen;
  }

  buscar() {
    this.origen = (<HTMLInputElement>document.getElementById("origen")).value;
    this.destino = (<HTMLInputElement>document.getElementById("destino")).value;
    this.mostrar = true;
    this._iberia.getVuelosIberia(this.origen,this.destino).subscribe();
  }

  filterCompany() {
    this.company = !this.company;
  }

  filterPrice() {
    this.price = !this.price;
  }

}
