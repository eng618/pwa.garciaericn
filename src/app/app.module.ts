import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';

import { MatToolbarModule } from '@angular/material';

const routes: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
