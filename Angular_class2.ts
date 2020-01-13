Angular project structure

e2e : This folder contains the files for end-to-end testing, which is set up to use the Protractor package.

---------------------------------------------------------------------------------------------------
  
node_modules : This folder contains the NPM packages(dependencies described in package.json) that are required for the application 
and for the Angular development tools(devdependencies).

-------------------------------------------------------------------------------------------------------------
  
.editorconfig : This file contains settings that configure text editors. You can find more info at  "http://editorconfig.org".

------------------------------------------------------------------------------------------------------------------

.gitignore: This file contains a list of files and folders that are excluded from version control when using Git. If you dont want 
to upload/commit files or folders to git, you can specify in this file.

------------------------------------------------------------------------------------------------------------

angular.json : This file contains the configuration for the Angular development tools.

-------------------------------------------------------------------------------------------------------------
  
package.json : This file contains details of the NPM packages required by the application and the development tools 
and defines the application details like name,version,keywords,license,author

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
    "@types/jasminewd2": "~2.0.3",
