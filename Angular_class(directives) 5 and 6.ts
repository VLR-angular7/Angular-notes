                                   ------------Adding bootstrap to Angular Application----------------
                                   
If you want to add bootstrap to angular application, you need to follow below steps
1.First you need to install jquery library because bootstrap framework depends on jquery library
2.Next you need to install bootstrap framework

Here first you need to open comand prompt and navigate to your angular application directory in command prompt.
Now you can install these two libraries using the npm(node package manager). run below commands in command prompt
1.npm install jquery        // Here it will installed(downloaded) jquery plugin in your "node_modules" folder
2.npm install bootstrap     // Here it will installed(downloaded) bootstrap plugin in your "node_modules" folder

Next step is you need to add bootstrap path in styles(css path) array and scripts array(js path) ain angular.json file

  "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"      // Here you have added bootstrap css path in styles array
            ],
            "scripts": [
             "node_modules/jquery/dist/jquery.min.js",              // Here you have added jquery and bootstrap js path in scripts array
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
          },
        },
If you want to check whether bootstrap is working or not, you can add simple bootstrap button in app.component.html and test it

Ex:

//app.component.html
<button class="btn btn-success">Click Me</button>       // Here it prints output as "Click Me" button with green color

-------------------------------------------------------------------------------------------------------------------------------------------
                                          ---------- DIRECTIVES IN ANGULAR-----------------
                                                 
Directives add behaviour to an existing DOM element.
       (or)
Directives allow you to attach behavior to elements in the DOM.

There are 3 types of directives in angular

1.Structural directives — It change the DOM layout by adding and removing DOM elements. 
Ex:  *ngIF, *NgFor ,*ngSwitch

2.Attribute directives — It change the appearance or behaviour of an element, component
Ex: ngStyle,ngClass

3. Component Directives— directives with a template(view).

-----------------------------------------------------------------------------------------------------------------------------------------
                          --------------*ngIf Directive-------------------
The *ngIf is a structural directive is used when you want to display or remove an element based on a condition.
If the condition is true the element will be present in DOM otherwise element will be removed from DOM.

*ngIf directive can be added to any html element like paragraph,heading,div and another component also

Syntax : <start tag *ngIf="expression">Content</end tag>

1. <p *ngIf="true">This is paragraph </p> // Here you added *ngIf to paragaraph element 
2. <div *ngIf="true">This is div  </div> // Here you added *ngIf to div element 
3. <h3 *ngIf="true">This is heading3 </h3> // Here you added *ngIf to h3 element
4. <app-header *ngIf="true"></app-header> // Here you added *ngIf to another component (i.e Header Component)



The below example explains you about the *ngIf directive.

Example1:

// app.component.ts
import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class ExampleComponent {
  show: boolean = true         // Here you have defined a property "show" which is having boolean value as true
}

// app.component.html
<p>Show this all the time</p>          

<p *ngIf="show">Show this only if "show" is true</p>
//Here this paragraph will display only when "show" value is true
// If you change "show" value to false,then paragraph will hide
---------------------------------------------------------------------------------------------------------------------------------------
                           ----------------*ngIf with LOGICAL OPERATORS-----------------------
                                  
you can use *ngIf dirctives with logical operators like NOT(!) operator, OR(||) operator, AND(&&) operator also

1. NOT(!) Operator
If you want to invert the boolean value of a variable or property present in the component class,
  you can use the not operator (!).
                                
   Ex:
 // component.ts 
 export class ExampleComponent {
  show: boolean = true         // Here you have defined a property "show" which is having boolean value as true
}
 <p *ngIf="!show">Welcome to HYD </p>
// Here it will hides the paragraph due to NOT(!) operator (i.e !show will become false)

2. OR(||) Operator
  If you want to check the condition with one or more statements(expressions), you can use logical OR operator.
  If any one of the statement is true then the entire statement will consider as true.
  
  Ex:
   // component.ts 
 export class ExampleComponent {
  isSE: boolean = true;        // Here you have defined a property "SE" which is having boolean value as true
   isDeveloper:boolean= false  // Here you have defined a property "isDeveloper" which is having boolean value as false
}
 <p *ngIf="isSE || isDeveloper ">User is softwrae engineer</p>
// Here it will shows the paragraph due to "isSE" is true (*ngIf checks for any one of the expression(isSE or isDeveloper) should be true

3.2. AND(&&) Operator
  If you want to check the condition with one or more statements(expressions), you can use logical AND operator.
  Here both the statements should be true then only entire statement will consider as true.
  
  Ex:
   // component.ts 
 export class ExampleComponent {
  isSE: boolean = true;        // Here you have defined a property "SE" which is having boolean value as true
   isDeveloper:boolean= false  // Here you have defined a property "isDeveloper" which is having boolean value as false
}
 <p *ngIf="isSE && isDeveloper ">User is softwrae engineer</p>
// Here it will hides the paragraph due to "isDeveloper" is false (*ngIf checks for both the expression(isSE and isDeveloper) should be true

----------------------------------------------------------------------------------------------------------------------------------------
                     -------------------------- *ngif With "else" and "then" ------------------------

----> *ngIf with else
You can also write if else condiotions in html using  angular structural directives. To achive if else condition you need to use
ng-template.

The ng-template is a special element that is interpreted by angular and has no DOM. That means, 
this tag is not included in the final HTML result, but only its content.

Ex:
// app.component.ts
export class AppComponent {
  show: boolean = true         // Here you have defined a property "show" which is having boolean value as true
}

//app.component.html
<div *ngIf="show; else notShow">
  <p>
    Show this only if condition is true         // if blcok
  </p>
</div>

<ng-template #notShow>
  <p>
    Show this only if condition is false    // else block
  </p>
</ng-template>

--- > *ngIf with then 
If you want to write two separate sections(containers) for if and else condition, you can use *ngIf with then.

Ex :
// app.component.ts
export class AppComponent {
  show: boolean = true         // Here you have defined a property "show" which is having boolean value as true
}

//app.component.html
<ng-template
  *ngIf="show;then showBlock; else notShowBlock">
</ng-template>

<ng-template #showBlock>                  // If block
  <p>
    Show this only if condition is true
  </p>
</ng-template>

<ng-template #notShowBlock>
  <p>
    Show this only if condition is not false
  </p>
</ng-template>

--------------------------------------------------------------------------------------------------------------------------------------
                                   ---------------*ngSwitch Directive----------------------

*ngSwitch is a structural directive that adds or removes templates (displaying or hiding views) when the expression
matches the switch expression.
       
 syntax :
       <container-element [ngSwitch]="switch_expression">
   <some-element *ngSwitchCase="match_expression_1">...</some-element>
   <some-element *ngSwitchCase="match_expression_2">...</some-element>
       ...
   <some-element *ngSwitchDefault>...</some-element>
</container-element>
       
Ex:
   // app.component.ts
export class AppComponent {
  inputValue: number = 2         // Here you have defined a property "show" which is having boolean value as true
}
       
 <div [ngSwitch]="inputValue">
  <p *ngSwitchCase="1">India</p>           // Here it prints output as "England" because it matches second expression(i.e inputValue is 2)
  <p *ngSwitchCase="2">England</p>
  <p *ngSwitchCase="3">Newzeland</p>
  <p *ngSwitchDefault>Other Country</p>
</div>

-----------------------------------------------------------------------------------------------------------------------------------------
                                   -------------*ngFor Directive----------------------            

                                
                              
                                                                                         
                                                                                              
                                                                                              







                            





  
