# Notensystem Weiterbildung TI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

The project includes angular material. 

## Demo - Size Estimation
To estimate the bundle size we built a demo-application which includes as many components as we think we will need from the material library. 
We think we will need at least the following components from the angular-material-module: 

* MatFormFieldModule,
* MatInputModule,
* MatSelectModule,
* MatSliderModule,
* MatSlideToggleModule,
* MatDatepickerModule,
* MatNativeDateModule,
* MatCardModule,
* MatButtonModule,
* MatCheckboxModule,
* MatRadioModule,
* MatTabsModule,
* MatStepperModule,
* MatChipsModule,

As the build optimized performs an effient tree-shaking we had to make sure, to implement those components. 
Those are all included in "Demo-Component".

* Demo-Component

Demo-Component Tab 1: 
(https://github.com/Schmitda/Notensystem-Weiterbildung-TI-Frontend/blob/master/Angular-Material-Demo.PNG?raw=true)
Demo-Component Tab 2: 
(https://github.com/Schmitda/Notensystem-Weiterbildung-TI-Frontend/blob/master/Angular-Material_2.PNG?raw=true)

The bundle-size-analysis is performed by webpack's Webpack-Bundle-Analyzer. 

Following three build-methods are included: 

* Ng - Serve 
  * chunk {inline} inline.bundle.js (inline) 3.85 kB [entry] [rendered]
  * chunk {main} main.bundle.js (main) 49.8 kB [initial] [rendered]
  * chunk {polyfills} polyfills.bundle.js (polyfills) 554 kB [initial] [rendered]
  * chunk {styles} styles.bundle.js (styles) 165 kB [initial] [rendered]
  * chunk {vendor} vendor.bundle.js (vendor) 14.6 MB [initial] [rendered]
  * Build-Time: 8 sec
  * Total: 15.372 MB
* JIT - Build
  * chunk {inline} inline.bundle.js, inline.bundle.js.map (inline) 3.89 kB [entry] [rendered]
  * chunk {main} main.bundle.js, main.bundle.js.map (main) 24 kB [initial] [rendered]
  * chunk {polyfills} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 205 kB [initial] [rendered]
  * chunk {styles} styles.bundle.js, styles.bundle.js.map (styles) 63.1 kB [initial] [rendered]
  * chunk {vendor} vendor.bundle.js, vendor.bundle.js.map (vendor) 5.26 MB [initial] [rendered]
  * Total 5.555 MB
  * Build-Time 8 sec
* AOT - Build
  * chunk {inline} inline.bundle.js, inline.bundle.js.map (inline) 3.89 kB [entry] [rendered]
  * chunk {main} main.bundle.js, main.bundle.js.map (main) 219 kB [initial] [rendered]
  * chunk {polyfills} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 205 kB [initial] [rendered]
  * chunk {styles} styles.bundle.js, styles.bundle.js.map (styles) 63.1 kB [initial] [rendered]
  * chunk {vendor} vendor.bundle.js, vendor.bundle.js.map (vendor) 3.66 MB [initial] [rendered]
  * Total: 4.1 MB
  * Build-Time 10 sec
* AOT - Build - Build-Optimizer
  * chunk {inline} inline.bundle.js, inline.bundle.js.map (inline) 3.89 kB [entry] [rendered]
  * chunk {main} main.bundle.js, main.bundle.js.map (main) 3.66 MB [initial] [rendered]
  * chunk {polyfills} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 204 kB [initial] [rendered]
  * chunk {styles} styles.bundle.js, styles.bundle.js.map (styles) 63.1 kB [initial] [rendered]
  * Total: 3.923 MB
  * Build-Time: 17 sec
* AOT - Build - AOT - PROD - Build-Optimizer
  * chunk {0} polyfills.b6b2cd0d4c472ac3ac12.bundle.js (polyfills) 59.7 kB [initial] [rendered]
  * chunk {1} main.b97a8ba3c17b1193819f.bundle.js (main) 676 kB [initial] [rendered]
  * chunk {2} styles.0d08c538d8c9eaf4d901.bundle.css (styles) 46.9 kB [initial] [rendered]
  * chunk {3} inline.318b50c57b4eba3d437b.bundle.js (inline) 796 bytes [entry] [rendered]
  * Total: 1.581 MB
  * Build-Time: 9 sec 

* AOT - Build - AOT - PROD - Build-Optmizer *without material*
  * chunk {0} polyfills.b6b2cd0d4c472ac3ac12.bundle.js (polyfills) 59.7 kB [initial] [rendered]
  * chunk {1} main.100e43e8b76fb0786892.bundle.js (main) 247 kB [initial] [rendered]
  * chunk {2} styles.0d08c538d8c9eaf4d901.bundle.css (styles) 46.9 kB [initial] [rendered]
  * chunk {3} inline.318b50c57b4eba3d437b.bundle.js (inline) 796 bytes [entry] [rendered]
  * Total: 1.1 MB
  * Build-Time: 4.6 sec


### View Reports
* JIT - Build
  * Run `npm run bundle-report-jit-np` to see the report 
* AOT - Build
  * Run `npm run bundle-report-aot` to see the report
* AOT - Build - Build-Optimizer
  * Run `npm run bundle-report-aot-bo` to see the report
* AOT - Build - AOT - PROD - Build-Optimizer
  * Run `npm run bundle-report-aot-bo-prod` to see the report
Note: RxJS is not included as this test should show the Angular-Material impact on the project.

Result of interpretation: 
* Build - AOT - Prod - With Build Optimizer is the only viable option
* Saddly it ain't possible to find out how big the material build is. As the build-optimizer destroies the stats. 
* This is why the project was build once again without the material module resulting in a 400 KB less big bundle. 
* I assume that the currently used modules use around 400 KB in size. 
* Further possible improvements 
  * Implementing Ivy (if it is ready before August)
  * Serving Angular files as GZIP 
  
 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
