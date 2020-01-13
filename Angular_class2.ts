Angular project structure

e2e : This folder contains the files for end-to-end testing, which is set up to use the Protractor package.

---------------------------------------------------------------------------------------------------
  
node_modules : This folder contains the NPM packages(dependencies described in package.json) that are required for the application 
and for the Angular development tools(devdependencies).

-------------------------------------------------------------------------------------------------------------
  
src : This folder contains the application’s source code, resources, and configuration files.

//SRC folder contents
app : This folder contains an application’s source code and content.

assets : This folder is used for the static resources required by the application, such as images.

environments : This folder contains configuration files that define settings for different environments. 
the only configuration setting is the production flag, which is set to true when the application is built for deployment.

browserlist : This file is used to support the CSS processing packages that are used by the development tools.

favicon.ico : This file contains an icon that browsers will display in the tab for the application. The default image is the Angular logo.

index.html : This is the entry file which holds the high level container for the angular application.

karma.conf.js This file contains the configuration for the Karma testing tool, which is mainly useful for running unit test cases.

main.ts: As defined in angular.json file, this is the main ts file that will first run. This file bootstraps (starts) the AppModule 
from app.module.ts , and it can be used to define global configurations.

polyfills.ts This file is used to include polyfills in the project to provide support for features
that are not available natively in some browsers, especially Internet Explorer.

styles.css This file is used to define CSS styles that are applied throughout the application.

tests.ts This is the configuration file for the Karma test package.

tsconfig.app.json This is the configuration file for the TypeScript compiler that is used during
development.

tsconfig.spec.json This is the configuration file for the TypeScript compiler that is used during
testing.

----------------------------------------------------------------------------------------------------
  
.editorconfig : This file contains settings that configure text editors. You can find more info at  "http://editorconfig.org".

------------------------------------------------------------------------------------------------------------------

.gitignore: This file contains a list of files and folders that are excluded from version control when using Git. If you dont want 
to upload/commit files or folders to git, you can specify in this file.

------------------------------------------------------------------------------------------------------------

angular.json : This file contains the configuration for the Angular development tools.

-------------------------------------------------------------------------------------------------------------
  
package.json : This file contains details of the NPM packages required by the application and the development tools 
and defines the application details like name,version,keywords,license,author

Name: It contains application or package name.
version :It specifies the current verson of Appllication.
private : If set to true prevents the app/package to be accidentally published on npm.
author: It specifies the author of Application.
//SCRIPTS
Scripts :It Defines a set of scripts you can run for development purpose. It allows you to run the following commands using npm.
Ex: npm run <script name>
"scripts": {
 "ng": "ng",
 "start": "ng serve",
 "build": "ng build",
 "test": "ng test",
 "lint": "ng lint",
 "e2e": "ng e2e"
}
1. ng :It runs the ng command, which provides the list of commands to run or build or test our app.
2. start : It starts the development tools, It is equivalent to the ng serve command
3. build : It performs the production build process, It is equivalent to running the ng build command with the --prod argument.
4. test : It starts the unit testing tools, It is equivalent to the ng test command.
5. lint :It starts the TypeScript linter,It is equivalent to the ng list command.
6. e2e  :It starts the end-to-end testing tools and is equivalent to the ng e2e command.

//DEPENDENCIES AND DEV DEPENDNCIES

dependencies : The dependencies property is used to list the packages that the application will require to run. 
I am mentioning some of the dependecies
are required to run our angular application.

Each package will be having package name followed by package version
Ex:
 "dependencies": {
    "@angular/animations": "~8.2.10",
    "@angular/common": "~8.2.10",
    "@angular/compiler": "~8.2.10",
    "@angular/core": "~8.2.10",
    "@angular/forms": "~8.2.10",
    "@angular/platform-browser": "~8.2.10",
    "@angular/platform-browser-dynamic": "~8.2.10",
    "@angular/router": "~8.2.10"
 }
devDependencies : this property contains a list of the packages that are required for development only.
devDependencies only to develop, e.g.: unit tests, typescriptScript to JavaScript transpilation, minification
Modules/packages in devDependencies dont need to be installed on the production server.
You can use "npm install --production" to skip installing devDependencies
Ex:
 "devDependencies": {
    "@angular-devkit/build-angular": "^0.803.13",
    "@angular/cli": "~8.3.9",
    "@angular/compiler-cli": "~8.2.10",
    "@angular/language-service": "~8.2.10",
    "@types/file-saver": "^2.0.1",
    "@types/jasmine": "~3.3.8",
    "@types/jasminewd2": "~2.0.3"
 }

----------------------------------------------------------------------------------------------------------------

package-lock.json :This file contains version information for all the packages that are installed in the node_modules folder.

-----------------------------------------------------------------------------------------------------------------
  
README.md : This is a readme file that contains project description and  the list of commands for the development tools.

-----------------------------------------------------------------------------------------------------------------
  
tsconfig.json : This file contains the configuration settings for the TypeScript compiler.

----------------------------------------------------------------------------------------------------------------

tstlint.json : This file contains the settings for the TypeScript linter.

----------------------------------------------------------------------------------------------------------------------------------------
                           ------------------------------ ** HOW ANGULAR APP GETS LOADED **------------------------------

Step 1: main.ts file gets loaded. It bootstraps(starts) the application by calling App.module.ts file.

The main.ts is used to boostrap(starts) the application. It loads everything and controls the startup of the application. So we need
to import the all the required modules in main.ts file.

-------------------------------------***main.ts file starts***----------------------------------
import { enableProdMode } from '@angular/core'; 
// This module used to enable/disable production mode
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// This module used to handle to start angular application in browser
import { AppModule } from './app/app.module'; 
// This is root module that tells Angular how to assemble the application .Every Angular app has a root module class.
import { environment } from './environments/environment';
/*this library is used to manage different environment settings. This file basically contains a constant object that either 
 sets the production property to true or false.If the value in the property is true, run the enableProdMode function */

if (environment.production) {    // Here we are checking whether environment is production or not
 enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

//we are executing the boostrapModule function using platformBrowserDynamic module and pass it the name of the module(Appmodule) to be boostrapped.

-----------------------------------***main.ts file ends ***---------------------------------------------------
  
Step 2: app.module.ts file holds an array of bootstrap components. Here, we find our root component reference.
/* Module in Angular refers to a place where you can group the components, directives, pipes, and services,
which are related to the application.

Angular apps are modular and to maintain modularity, we have Angular modules or you can say NgModules. 
Every Angular app contains at least one Angular module, i.e. the root module. 
Generally, it is named as AppModule. The root module can be the only module in a small application

*/


---------------------**App.module.ts file starts**-------------------
  
import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
-----------------------------**App.module.ts ends**---------------
  
  
declarations: The classes that are related to views and it belong to this module. 
There are three classes of Angular that can contain view: components, directives, and pipes.

imports: Modules whose classes are needed by the component of this module.

providers: Services present in one of the modules which is to be used in the other modules or components.
Once a service is included in the providers it becomes accessible in all parts of that application.

bootstrap: The root component which is the main view of the application. This root module only has this property 
and it indicates the component that is to be bootstrapped.

  -------------------------------------------------------------------------------------------------------------------------



Step 3: Root component gets loaded and the template files from app.component.html become part of index.html.
  /*
  The component called AppComponent, which is selected by the root Angular module, is defined in the app.
component.ts file in the src/app folder */
  
  import { Component } from '@angular/core';
//debugger;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

The properties for the @Component decorator configure its behavior. The selector property tells Angular
that this component will be used to replace an HTML element called app-root. The templateUrl and
styleUrls properties tell Angular that the HTML content that the component wants to present to the user
can be found in a file called app.component.html and that the CSS styles to apply to the HTML content are
defined in a file called app.component.css.
  
  
  
  
  
