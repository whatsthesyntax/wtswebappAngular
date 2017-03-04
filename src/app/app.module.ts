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
import { APP_ROUTES } from "./app.routes";
import { RouterModule }   from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { ContributionComponent } from './contribution/contribution.component';
import { CoderesultComponent } from './coderesult/coderesult.component';
import { SeecodeComponent } from './seecode/seecode.component';
import { EspacepersoComponent } from './espaceperso/espaceperso.component';
import { SearchbylangageComponent } from './searchbylangage/searchbylangage.component';
import { HeaderconnectComponent } from './headerconnect/headerconnect.component';
import { SidebarconnectComponent } from './sidebarconnect/sidebarconnect.component';
import { SearchjavaComponent } from './searchjava/searchjava.component';
import { SearchcsharpComponent } from './searchcsharp/searchcsharp.component';
import { SearchphpComponent } from './searchphp/searchphp.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SearchareaComponent,
    ConnexionComponent,
    InscriptionComponent,
    ContributionComponent,
    CoderesultComponent,
    SeecodeComponent,
    EspacepersoComponent,
    SearchbylangageComponent,
    HeaderconnectComponent,
    SidebarconnectComponent,
    SearchjavaComponent,
    SearchcsharpComponent,
    SearchphpComponent
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
