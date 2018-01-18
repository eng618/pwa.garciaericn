// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailedCardComponent } from './detailed-card/detailed-card.component';

// Services
import { LyndaCourseService } from './lynda-course.service';

// Angular Material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';


const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailedCardComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MatToolbarModule, MatCardModule, MatGridListModule, MatButtonModule, MatIconModule, MatSidenavModule
  ],
  providers: [LyndaCourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
