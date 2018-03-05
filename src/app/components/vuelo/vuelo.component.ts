import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IberiaService} from '../../services/iberia.service'

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styles: []
})
export class VueloComponent implements OnInit {

  vuelo : any = [];
  constructor(private activatedRoute:ActivatedRoute,public _iberia:IberiaService) { }

  ngOnInit() {

    this.activatedRoute.params
        .map (params => params['id'])
        .subscribe( id => {
          console.log(id);
          this._iberia.getVuelo(id).subscribe(vuelo => {this.vuelo = vuelo;console.log(vuelo);});
         
    });
    console.log(this.vuelo +" vuelo");

  }

  getPrecioTotal() {
    if(this.vuelo["plazas_disponibles"] <= parseInt((<HTMLInputElement>document.getElementById("plazas")).value)){
      alert("hola");
      (<HTMLInputElement>document.getElementById("precioTotal")).value = (parseInt((<HTMLInputElement>document.getElementById("plazas")).value) * this.vuelo["precio"]) + "€";
    }
  }

}
