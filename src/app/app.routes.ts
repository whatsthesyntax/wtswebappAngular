import { SearchareaComponent } from "./searcharea/searcharea.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { ContributionComponent } from "./contribution/contribution.component";
import { CoderesultComponent } from "./coderesult/coderesult.component";
import { SeecodeComponent } from "./seecode/seecode.component";
import { EspacepersoComponent } from "./espaceperso/espaceperso.component";
import { SearchbylangageComponent } from "./searchbylangage/searchbylangage.component";
import { provideRoutes } from "@angular/router";

export const APP_ROUTES = [
  {path: '', component: SearchareaComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent },
  {path: 'contribution', component: ContributionComponent },
  {path: 'result', component: CoderesultComponent },
  {path: 'seecode', component: SeecodeComponent },
  {path: 'perso', component: EspacepersoComponent },
  {path: 'bylangage', component: SearchbylangageComponent }
];
