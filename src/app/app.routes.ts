import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SecondpageComponent } from './pages/secondpage/secondpage.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:AppComponent, children:[
        {path:'', component: DashboardComponent},
        {path:'second', component:SecondpageComponent}
    ]}
];
