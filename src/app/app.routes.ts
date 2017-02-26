import { SearchareaComponent } from "./searcharea/searcharea.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { AdminformComponent } from "./adminform/adminform.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { AllUsersComponent } from "./all-users/all-users.component";
import { ContributionComponent } from "./contribution/contribution.component";
import { CoderesultComponent } from "./coderesult/coderesult.component";
import { SeecodeComponent } from "./seecode/seecode.component";
import { provideRoutes } from "@angular/router";

export const APP_ROUTES = [
  {path: '', component: SearchareaComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'admin', component: AdminformComponent },
  {path: 'inscription', component: InscriptionComponent },
  {path: 'allusers', component: AllUsersComponent },
  {path: 'contribution', component: ContributionComponent },
  {path: 'result', component: CoderesultComponent },
  {path: 'seecode', component: SeecodeComponent }
];
