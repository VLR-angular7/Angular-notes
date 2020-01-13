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
      
