import { SearchareaComponent } from "./searcharea/searcharea.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { AdminformComponent } from "./adminform/adminform.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { provideRoutes } from "@angular/router";

export const APP_ROUTES = [
  {path: '', component: SearchareaComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'admin', component: AdminformComponent },
  {path: 'inscription', component: InscriptionComponent }
];
