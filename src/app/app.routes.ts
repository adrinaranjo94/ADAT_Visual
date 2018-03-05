import { RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import { VueloComponent } from './components/vuelo/vuelo.component';



const APP_ROUTES : Routes = [
    {path: 'home',component:HomeComponent},
    {path: 'search',component:SearchComponent},
    {path: 'vuelo/:id',component:VueloComponent},
    {path: '',pathMatch:'full',redirectTo:'home'},
    {path: '**',pathMatch:'full',redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});