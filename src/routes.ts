import { Routes } from "@angular/router";
import { ContactComponent } from "./app/ui/contact/contact.component";
import { HomeComponent } from "./app/ui/home/home.component";
import { PortfolioComponent } from "./app/ui/portfolio/portfolio.component";
import { AboutComponent } from "./app/ui/about/about.component";

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'about', component: AboutComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', redirectTo: '/home'}
]