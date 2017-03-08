# Wtswebapp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Commandes
Pour avoir angular-cli : npm install -g angular-cli
Après le git clone : npm update
Pour avoir l'application sur un serveur, depuis la racine du projet : ng serve

## Remarques
Il faut changer les liens d'url dans connexion.service.ts pour tester les appele à l'api.

## TODO

-get Les langages par Utilisateur
-get Les codes par Utilisateur
-get La connexion retour user
-post La création d'un code perso
-put La modification d'un code perso
-post La création d'un code public (soumettre)
-post Validation d'un code public
-get recherche de codes par requête (string)
-get recherche par langage (avec un objet requête voir dans codes.service.ts et dans searchreq.ts )
-get Tous les langages
-get tous les mots clès

## PROBLEMES
L'ajout de code (perso ou public est bon).
Pour alimenter notre base il suffit de se connecter et d'utiliser le formulaire contribution.
J'ai ajouter des codes perso mais je n'arrive pas à les récupérer avec GET code par utilisateur.
J'ai ajouter une boucle for pour chaque un des langage et je n'arrive pas à les récupérer avec la recherche.
Pour la recherche par langage j'utilise la même que pour la recherche, je préfixe la requête avec le langage.
le résultat des codes retourné n'est pas uniforme, exemple :
{"codeId":20,
"code":"for ($i = 1; $i <= 10; $i++){\n    echo $i;\n}",
"description":"",
"tags":[25,3],
"langage":{"langageId":3,"langage":"php"},
"user":null,
"visible":true,
"valide":true}

Et :
{"codeId":19,
"code":"for(int i=0; i<10; i++){\n    System.out.println(\\\"item\\\"+i);\n}",
"description":"",
"tags":[{"tagId":25,"tag":"for"},
{"tagId":3,"tag":"boucle"}],
"langage":1,
"user":null,
"visible":true,
"valide":true}

difficilement exploitable.
