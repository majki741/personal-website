import { Routes } from "@angular/router";
import { HomeComponent } from "./app/ui/home/home.component";
import { PortfolioComponent } from "./app/ui/portfolio/portfolio.component";

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', redirectTo: '/home'}
]