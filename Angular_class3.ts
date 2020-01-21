-------------------------------***Data binding in Angular**-----------------------
Data binding is one of the most powerful and important features in Angular.It allows us to define communication 
between the component and view. So you can say that data binding is passed from component to view and from view to the component.

There are two types of Data binding in Angular
1. One-way data binding
2. Two-way data binding

1.One-way Data Binding- where a change in the state(property in component) affects the view 
(i.e. From Component to View Template) or change in the view affects the state(From View Template to Component).

2.Two-way Data Binding- where a change from the view can also change the model and similarly change in the model 
can also change in the view (From Component to View Template & also From View template to Component).
--------------------------------------------------------------------------
Angular Interpolation:
The Angular Interpolation is used to achieve one way data-binding i.e. From Component to the View Template.
If you want to display the read-only data on a view template (From Component to the View Template), then you can use 
the one-way data binding technique i.e. the Angular interpolation. The interpolation allows you to place the component property name
in the view template, enclosed in double curly braces: {{propertyName}}.

Example : 
--> app.component.ts
import { Component} from '@angular/core';        
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  firstName:string="Virat";
  lastName:string="Kohli";
  imagePath:string="https://cdn.cnn.com/cnnnext/dam/assets/190626120333-virat-kohli-tease-exlarge-169.jpg";
  isDisabled:boolean=false;
  getFullName():string{
  return "virat Kohli";
  }
}

 -->app.component.html

<h1>{{firstNaeme}}</h1>                 // It prints output as "Virat" in browser
<h1>{{lastName}}</h1>                   // It prints output as "Kohli" in browser
<img src="{{imagePath}}" alt="">        // It displays image in browser
  <p>{{getfullName()}}</p>              // It prints output as "Virat Kohli" in browser

Here, the Angular gets the value of FirstName and LastName property from the component (i.e. AppComponent) and then inserts
the FirstName and LastName value between the opening and closing <h1> element.

<h1>{{firstNaeme + " " +lastName}}</h1>     // It prints "Virat Kohli" in browser
<h1>{{'first Name - '+firstNaeme + ", last Name " +lastName}}</h1>  // It prints "first Name - Virat, Last Name-Kohli" in bowser

Here, you can add additional string along with firstName and lastName properties

                      --------------------***Angular Interpolation with Expression and ternary operator***---------------------
  
You can also specify some valid expression in double curly braces.
For example, if you want to perform a mathematical calculations,you can use interpolation.

<h1>{{10+20+30}</h1>   // It prints output as 60 in browser

syntax for ternary operator : condition ? First Statement(if condition is true) : Second Statement(if condition is false)

Ex: <h1>{{firstName ? firstName : "First is not available"}}</h1>
// it prints output as "Virat" because firstName property is avaialbe in component class

-----------------------------------------------------------------------------------------------------------------------------
        --------------------***PROPERTY BINDING IN ANGULAR***------------------
The Angular property binding is used to achieve one way data-binding i.e. From Component to the View Template.
        
        Ex: <img [src]="imagePath" alt="">

// Here [src] --> the image element's src property is in pair of square bracket
// "imagePath" --> the Component class imagePath property is in double Quotes     
          
What is the diffeence between interpolation and property binding ?
  
  Angular evaluates all expressions in double curly braces, converts the expression results to strings,
  and concatenates them with neighboring literal strings. Finally, it assigns this composite interpolated
  result to an element

--- > Property binding does not convert the expression result to a string.So if you need to bind something 
other than a string to your directive/component property, you must use property binding.
 
  Interpolation : Interpolation uses the {{ expression }} to render the value from component to view.
  
  Property binding : It uses [] to send values from the component to the template. 
  it is used to set an element property to a non-string data value.
  
  Ex: We are disabling a button by binding to the Boolean property isDisabled.
  
<button [disabled]='isDisabled'>Click Me</button> 
// Here button will be in enabled mode because "isDisabled"  property  value is false

If you use interpolation ,the button will always be disabled irrespective of isDisabled  property value is true of false.

<button disabled='{{isDisabled}}'>Click Me</button>
// Here button will be in disabled mode

<button bind-disabled='isDisabled'>Click Me</button>
// Here you can use bind instead of square bracket. this is called canonical form

---------------------------------------------------------------------------------------------------------------------------
                      -----------------***EVENT BINDING IN ANGULAR***-----------------
The Angular Event binding is used to achieve one way data-binding i.e. From View to the View Component.

When a user performs an action like clicking on a button, selecting option from a dropdown list, 
hovering over an element, typing in a textbox etc., then the corresponding event for that action is raised. 
you can use the angular event binding to get notified when these events occur.

Ex: <button (click)="submit()">Submit</button> 
// Here you are having button with click event. So once if you click the button, submit method will trigger
and it will prints "Button is clicked" in Console.

// component.ts
 submit(): void {
        console.log('Button is Clicked');
    }
// Here submit method is defined with datatype as void(which returns nothing)
                        
          




