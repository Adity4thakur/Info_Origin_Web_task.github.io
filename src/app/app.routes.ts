import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'register', component: RegisterComponent },
];
