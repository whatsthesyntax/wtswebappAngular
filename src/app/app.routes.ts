import { SearchareaComponent } from "./searcharea/searcharea.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { ContributionComponent } from "./contribution/contribution.component";
import { CoderesultComponent } from "./coderesult/coderesult.component";
import { SeecodeconnectComponent } from "./seecodeconnect/seecodeconnect.component";
import { SeecodeComponent } from "./seecode/seecode.component";
import { EspacepersoComponent } from "./espaceperso/espaceperso.component";
import { SearchjavaComponent } from "./searchjava/searchjava.component";
import { SearchcsharpComponent } from "./searchcsharp/searchcsharp.component";
import { SearchphpComponent } from "./searchphp/searchphp.component";
import { SearchconnectComponent } from "./searchconnect/searchconnect.component";
import { provideRoutes } from "@angular/router";

export const APP_ROUTES = [
  {path: '', component: SearchareaComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent },
  {path: 'contribution', component: ContributionComponent },
  {path: 'result', component: CoderesultComponent },
  {path: 'seecodeconnect', component: SeecodeconnectComponent },
  {path: 'seecode', component: SeecodeComponent },
  {path: 'perso', component: EspacepersoComponent },
  {path: 'java', component: SearchjavaComponent},
  {path: 'csharp', component: SearchcsharpComponent},
  {path: 'php', component: SearchphpComponent},
  {path: 'seachconnect', component: SearchconnectComponent}
];
