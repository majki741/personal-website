import { Routes } from "@angular/router";
import { HomeComponent } from "./app/ui/home/home.component";

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', redirectTo: '/home'}
]