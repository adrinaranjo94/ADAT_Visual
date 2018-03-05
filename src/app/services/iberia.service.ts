import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Injectable()
export class IberiaService {

  vuelos: any[] = [];
  urlVuelos:string = 'http://localhost:3000/flights';
  urlVuelo:string = 'http://localhost:3000/flight';
  
urlFinal:SafeResourceUrl;
  constructor(public http : HttpClient,private domSanatizer:DomSanitizer) { 
    console.log("Servicio iberia listo");
   this.urlFinal = this.domSanatizer.bypassSecurityTrustResourceUrl(this.urlVuelos);
  }
    
  private getHeaders():HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type' : "application/x-www-form-urlencoded" 
    });

    return headers;
  }
    getVuelosIberia(ciudad:string,destino:string,fecha = "12-12-12") {
        let body = "ciudad=" + ciudad + "&destino=" + destino + "&fecha_salida=" + fecha;
        let headers = this.getHeaders();
    return this.http.post(this.urlVuelos,body,{headers})
      .map((resp:any)=> {
          console.log(resp);
        this.vuelos = resp;
        return this.vuelos;
      });

    }
  getVuelo(id:number){
    let body = "idVuelo=" + id;
        let headers = this.getHeaders();
    return this.http.post(this.urlVuelo,body,{headers});

  }

}
