import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { VueloComponent } from './components/vuelo/vuelo.component';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { IberiaService } from './services/iberia.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FooterComponent,
    NavbarComponent,
    VueloComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    IberiaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
