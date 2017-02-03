import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchareaComponent } from './searcharea/searcharea.component';
import { BodyComponent } from './body/body.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminformComponent } from './adminform/adminform.component';
import { TesthideComponent } from './testhide/testhide.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SearchareaComponent,
    BodyComponent,
    ConnexionComponent,
    AdminformComponent,
    TesthideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
