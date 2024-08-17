import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';


export const routes: Routes = [
    {
        path:'',
        component: FrontLayoutComponent, // parent component
        children: [
            {
                path:'',
                component: HomeComponent // default child component
            },
            {
                path:'about',
                component: AboutComponent
            },
            {
                path:'contact',
                component: ContactComponent
            },
            {
                path:'login',
                component: LoginComponent
            },
            {
                path:'register',
                component: RegisterComponent
            },
        ]
    }    
];
