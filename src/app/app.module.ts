import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { appRoutes } from 'src/routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { HomeComponent } from './ui/home/home.component';
import { PortfolioComponent } from './ui/portfolio/portfolio.component';
import { PortfolioThumbnailComponent } from './shared/portfolio-thumbnail/portfolio-thumbnail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PortfolioComponent,
    PortfolioThumbnailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
