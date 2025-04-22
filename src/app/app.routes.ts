import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { SecondpageComponent } from './pages/secondpage/secondpage.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:AppComponent, children:[
        {path:'', component: FirstpageComponent},
        {path:'second', component:SecondpageComponent}
    ]}
];
