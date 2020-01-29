                                   ------------Adding bootstrap to Angular application----------------
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
  Next step is you need to stop your angular application and have to again using ngserve
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

 *ngFor is a structural directive in Angular which is very much similar to the for loop used in most of the programming languages.
So, the NgFor directive is used to iterate over a collection of data.

Ex:
Now if you want to iterarte employee data and display in table, you can use *ngFor Directive

step1. First you need to define employees array with employee details like name,Emp Id, city in component

// component.ts
import { Component } from '@angular/core';
@Component({
    selector: 'employee-list',
    templateUrl: 'app/Employee/employee.Component.html',
    styleUrls: ['app/Employee/employee.Component.css']
})
export class EmployeeComponent {    
    employees: any[] = [
        {
            empID: 'emp101', firstName: 'Deepak', lastName: 'Kumar', city: 'HYD',
             gender: 'Male'
        },
        {
            empID: 'emp102', firstName: 'Anurag', lastName: 'kasyap', city: 'BLR',
             gender: 'Male'
        },
        {
            empID: 'emp103', firstName: 'Priyanka', lastName: 'setty', city: 'PUNE',
             gender: 'Female'
        },
        {
            empID: 'emp104', firstName: 'sivam', lastName: 'Sharma', city: 'HYD',
             gender: 'Male'
        },
        {
            empID: 'emp105', firstName: 'Mohit', lastName: 'Agarval', city: 'MUM',
             gender: 'Male'
        }
    ];
}

step2. Next you need to add styles in "employee.component.scss" file to beautify table 

// CSS code
table,th,td {
    border: 1px solid black;
    padding:10px;
    border-collapse: collapse;
}

step 3. Add Employee table HTML using *ngFor directive

// employee.component.html
<table>
        <tr>
            <th>EMP ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Gender</th>
        </tr>
        <tr *ngFor='let employee of employees'>
            <td>{{employee.ID}}</td>
            <td>{{employee.firstName}}</td>
            <td>{{employee.lastName}}</td>
            <td>{{employee.city}}</td>
            <td>{{employee.gender}}</td>
        </tr>
        <tr *ngIf="!employees || employees.length==0">
            <td colspan="5">
                No Students to display
            </td>
        </tr>
    </table>

Here ngFor directive is usually used to iterate over a collection of Data. In our case, the collection is an array of employees.

*ngFor=’let employee of employees – Here the ‘employee’ is called template input variable, 
which can be accessed by the <tr> element and any of its child elements.

The ngIf structural directive displays the row “No Employees Found“ when the employees property does not exist or 
when there is no employees in the array.

---------------------------------------------------------------------------------------

-----> *ngFor with index
           
If you want to access index of each elememt,you can get current element index using index variable. Here index starts with zero value

Ex:
// employee.component.html
<table>
        <tr>
            <th>S.No</th>
            <th>EMP ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Gender</th>
        </tr>
<tr *ngFor='let employee of employees; let i=index'>
           <td>{{i+1}}</td>                           // Here i value starts with '0', so you are adding 1 to index value.
            <td>{{employee.ID}}</td>
            <td>{{employee.firstName}}</td>
            <td>{{employee.lastName}}</td>
            <td>{{employee.city}}</td>
            <td>{{employee.gender}}</td>
        </tr>
        <tr *ngIf="!employees || employees.length==0">
            <td colspan="5">
                No Students to display
            </td>
        </tr>
</table>

// employee.component.ts
import { Component } from '@angular/core';
@Component({
    selector: 'employee-list',
    templateUrl: 'app/Employee/employee.Component.html',
    styleUrls: ['app/Employee/employee.Component.css']
})
export class EmployeeComponent {    
    employees: any[] = [
        {
            empID: 'emp101', firstName: 'Deepak', lastName: 'Kumar', city: 'HYD',
             gender: 'Male'
        },
        {
            empID: 'emp102', firstName: 'Anurag', lastName: 'kasyap', city: 'BLR',
             gender: 'Male'
        },
        {
            empID: 'emp103', firstName: 'Priyanka', lastName: 'setty', city: 'PUNE',
             gender: 'Female'
        },
        {
            empID: 'emp104', firstName: 'sivam', lastName: 'Sharma', city: 'HYD',
             gender: 'Male'
        },
        {
            empID: 'emp105', firstName: 'Mohit', lastName: 'Agarval', city: 'MUM',
             gender: 'Male'
        }
    ];
}

-------------------------------------------------------------------------
----->*ngFor with even and add

If you want to apply some css properties like color and background color to even and odd rows in employee table,
 you can use the even and odd variables. you can apply css properties like color to table rows using [ngClass] directive

Ex: In this example you are going to apply background color as red to "even rows" and  background color as blue to "odd rows".

step1. first you need to create two different classes in "employee.component.scss " file ,
  which can be applied to even rows and odd rows based on condition.
  
  // employee.component.scss
  .evenClass{
    background-color:red;
  }
.oddClass{
  background-color:blue;
}

step2 . you need to apply these two classes with [ngClass] directive in HTML

syntax : [ngClass]="{className1:true,className2:false}"

step3. Adding HTML with table code

// employee.component.html
<table>
        <tr>
            <th>S.No</th>
            <th>EMP ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Gender</th>
        </tr>
<tr *ngFor='let employee of employees; let i=index;let even=even;let odd=odd; [ngClass]={evenClass:even,oddClass:odd}'>
           <td>{{i+1}}</td>                           .
            <td>{{employee.ID}}</td>
            <td>{{employee.firstName}}</td>
            <td>{{employee.lastName}}</td>
            <td>{{employee.city}}</td>
            <td>{{employee.gender}}</td>
        </tr>
        <tr *ngIf="!employees || employees.length==0">
            <td colspan="5">
                No Employees Found
            </td>
        </tr>
</table>



// employee.component.ts
import { Component } from '@angular/core';
@Component({
    selector: 'employee-list',
    templateUrl: 'app/Employee/employee.Component.html',
    styleUrls: ['app/Employee/employee.Component.css']
})
export class EmployeeComponent {    
    employees: any[] = [
        {
            empID: 'emp101', firstName: 'Deepak', lastName: 'Kumar', city: 'HYD',
             gender: 'Male'
        },
        {
            empID: 'emp102', firstName: 'Anurag', lastName: 'kasyap', city: 'BLR',
             gender: 'Male'
        },
        {
            empID: 'emp103', firstName: 'Priyanka', lastName: 'setty', city: 'PUNE',
             gender: 'Female'
        },
        {
            empID: 'emp104', firstName: 'sivam', lastName: 'Sharma', city: 'HYD',
             gender: 'Male'
        },
        {
            empID: 'emp105', firstName: 'Mohit', lastName: 'Agarval', city: 'MUM',
             gender: 'Male'
        }
    ];
}

once if you run this code, you can found all the even rows will be having background color as "red" and odd rows will be
having background color as "blue"
-------------------------------------------------------------------
  ----->*ngFor with first and last

If you want to apply some css properties like color and background color to first and last rows only in employee table,
 you can use the first and last variables. you can apply css properties like color to table rows using [ngClass] directive

Ex: In this example you are going to apply background color as red to "first row" and  background color as blue to "last row".

step1. first you need to create two different classes in "employee.component.scss " file ,
  which can be applied to even rows and odd rows based on condition.
  
  // employee.component.scss
  .firstClass{
    background-color:red;
  }
.lastClass{
  background-color:blue;
}

step2 . you need to apply these two classes with [ngClass] directive in HTML

syntax : [ngClass]="{className1:true,className2:false}"

step3. Adding HTML with table code

// employee.component.html
<table>
        <tr>
            <th>S.No</th>
            <th>EMP ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Gender</th>
        </tr>
<tr *ngFor='let employee of employees; let i=index;let even=even;let odd=odd; [ngClass]={firsClass:first,lastClass:last}'>
           <td>{{i+1}}</td>                           .
            <td>{{employee.ID}}</td>
            <td>{{employee.firstName}}</td>
            <td>{{employee.lastName}}</td>
            <td>{{employee.city}}</td>
            <td>{{employee.gender}}</td>
        </tr>
        <tr *ngIf="!employees || employees.length==0">
            <td colspan="5">
                No Employees Found
            </td>
        </tr>
</table>



// employee.component.ts
import { Component } from '@angular/core';
@Component({
    selector: 'employee-list',
    templateUrl: 'app/Employee/employee.Component.html',
    styleUrls: ['app/Employee/employee.Component.css']
})
export class EmployeeComponent {    
    employees: any[] = [
        {
            empID: 'emp101', firstName: 'Deepak', lastName: 'Kumar', city: 'HYD',
             gender: 'Male'
        },
        {
            empID: 'emp102', firstName: 'Anurag', lastName: 'kasyap', city: 'BLR',
             gender: 'Male'
        },
        {
            empID: 'emp103', firstName: 'Priyanka', lastName: 'setty', city: 'PUNE',
             gender: 'Female'
        },
        {
            empID: 'emp104', firstName: 'sivam', lastName: 'Sharma', city: 'HYD',
             gender: 'Male'
        },
        {
            empID: 'emp105', firstName: 'Mohit', lastName: 'Agarval', city: 'MUM',
             gender: 'Male'
        }
    ];
}

once if you run this code, you can found only first row will be having background color as "red" and last row will be
having background color as "blue"
                                                                                  
