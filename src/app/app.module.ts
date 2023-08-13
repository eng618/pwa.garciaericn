// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

// Angular Material
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { MarkdownModule } from 'ngx-markdown';
import { environment } from '../environments/environment';

// Components (that represent pages)
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrivacyComponent } from './privacy-policy/privacy.component';

// Components
import { AppComponent } from './app.component';
import { DetailedCardComponent } from './components/detailed-card/detailed-card.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

// Services
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '**', redirectTo: '/' }, // TODO: redirect to 404 Component once #19 is complete
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {}),
    MarkdownModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailedCardComponent,
    AboutComponent,
    PrivacyComponent,
    PageHeaderComponent,
    ContactComponent,
    BlogComponent,
    PortfolioComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
  providers: [GoogleAnalyticsService],
})
export class AppModule {}
