// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

// Angular Material
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MarkdownModule } from 'ngx-markdown';
import { environment } from '../environments/environment';

// Components (that represent pages)
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

// Components
import { AppComponent } from './app.component';
import { DetailedCardComponent } from './components/detailed-card/detailed-card.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

// Services
import { GoogleAnalyticsService } from './services/google-analytics.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', redirectTo: '/' } // TODO: redirect to 404 Component once #19 is complete
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule
    MatSidenavModule,
    MatToolbarModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailedCardComponent,
    AboutComponent,
    PageHeaderComponent,
    ContactComponent,
    BlogComponent,
    PortfolioComponent
  ],
  bootstrap: [AppComponent],
  providers: [GoogleAnalyticsService]
})
export class AppModule { }
