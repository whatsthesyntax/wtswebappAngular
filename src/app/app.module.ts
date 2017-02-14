import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchareaComponent } from './searcharea/searcharea.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminformComponent } from './adminform/adminform.component';
import { APP_ROUTES } from "./app.routes";
import { RouterModule }   from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { ContributionComponent } from './contribution/contribution.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SearchareaComponent,
    ConnexionComponent,
    AdminformComponent,
    InscriptionComponent,
    AllUsersComponent,
    ContributionComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
