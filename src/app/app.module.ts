import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
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
import { HeaderconnectComponent } from './headerconnect/headerconnect.component';
import { SidebarconnectComponent } from './sidebarconnect/sidebarconnect.component';
import { SearchjavaComponent } from './searchjava/searchjava.component';
import { SearchcsharpComponent } from './searchcsharp/searchcsharp.component';
import { SearchphpComponent } from './searchphp/searchphp.component';
import { SearchconnectComponent } from './searchconnect/searchconnect.component';
import { SeecodeconnectComponent } from './seecodeconnect/seecodeconnect.component';
import { SearchphpconnectComponent } from './searchphpconnect/searchphpconnect.component';
import { SearchjavaconnectComponent } from './searchjavaconnect/searchjavaconnect.component';
import { SearchcsharpconnectComponent } from './searchcsharpconnect/searchcsharpconnect.component';
import { AddcodeComponent } from './addcode/addcode.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    SearchareaComponent,
    ConnexionComponent,
    InscriptionComponent,
    ContributionComponent,
    CoderesultComponent,
    SeecodeComponent,
    EspacepersoComponent,
    HeaderconnectComponent,
    SidebarconnectComponent,
    SearchjavaComponent,
    SearchcsharpComponent,
    SearchphpComponent,
    SearchconnectComponent,
    SeecodeconnectComponent,
    SearchphpconnectComponent,
    SearchjavaconnectComponent,
    SearchcsharpconnectComponent,
    AddcodeComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
