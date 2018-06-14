# Notensystem Weiterbildung TI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

The project includes angular material. 


## Development server

Wie starte ich den Angular - Webpack-Server. 
Um Angular zu starten, wird folgende Software benötigt: 

* NodeJS 8 +
* NPM (Node Package Manager)
* Angular-CLI (global installiert) 

Bevor Sie den Server starten, müssen Sie alle Dependencies mittels `npm install` installieren. 
Dies kann mehrere Minuten dauern. 
Wenn die Installation fehlschlägt, wird empfohlen erneut `npm install` auszuführen. 
Sofern der Server nach wie vor an selbiger Stelle fehlschlägt, kann der node_modules Ordner entfernt werden.
`rm node_module -rf` oder auf Windows mit dem GUI. 
(Die IDE verhindert unter Umständen, das der Ordner entfernt wird). Falls dies der Fall ist, schliessen Sie die IDE. 
Installieren sie anschliessend erneut die Node-Module `npm install`. 

Wenn alle Node-Pakete erfolgreich installiert sind, können Sie das Skript `npm run start` ausführen. 
Die lädt die Proxy-Configuration und startet die Transpilation. 
Im hintergrund wird der Befehl `ng serve` ausgeführt. 


### Der Server lässt sich nicht starten
Es kann vorkommen, dass beim starten eine Fehlermeldung erscheint. 
Wahrscheinlich ist node-sass dafür verantwortlich. Sofern in der Fehlermeldung das Paket erwähnt wird, installieren sie node-sass erneut. `npm install node-sass`

## Produktionsdateien generieren lassen

Sofern Sie die Dateien mittels AOT kompilieren lassen wollen, führen Sie das Skript `npm run build-aot-bo-prod`aus.
Dieser Befehl führt ng build mit folgenden Parametern aus: 
* aot
* prod
* build-optimizer
* stats-json

Sofern die exportierten Dateien übermässig gross sind, können Sie diese mit dem Skript `bundle-report-aot-bo-prod` untersuchen.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
