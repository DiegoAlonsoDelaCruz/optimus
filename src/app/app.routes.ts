import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', redirectTo: ''}

];
