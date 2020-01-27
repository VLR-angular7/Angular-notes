-----------------------------------***Attribute Binding***-----------------------------------------------

Attribute binding is useful where you don’t have any property in DOM respected to an HTML element attribute.
                                 
Attribute binding is same as property binding with the difference that we need to add attr. as prefix with attribute name

Suppose,If you want to create a table with some columns and want to merge these columns into a single column 
using the colspan attribute of the <td> element just like below. The value of this colspan attribute will be 
set up through property binding dynamically from the component.

Example:
app.component.html

<h2>Attribute Binding</h2>  
<table>  
    <tr>  
        <td [colspan]="colSpanValue">Employee Details</td>  
    </tr> 
    <tr>  
        <td>Name</td>
        <td>Virat Kohli</td>
    </tr> 
      <tr>  
        <td>Name</td>
        <td>Rohit Sharma</td>
    </tr> 
</table>  
attribute-binding-demo.component.ts

export class AppComponent{  
    colSpanValue = 2;
}  

In above example, You want to bind colSpan value with the colspan attribute of td element in HTML.
So once if you run the application, you will get the error message as "Can't bind to 'colspan' since it is not a known property of <td>
element

----------------------****Differences between HTML Attribute and DOM Property***------------------------------------
DOM is a model of objects that represent the structure of a document. It’s indeed a hierarchical structure of HTML elements in memory.

HTML is a markup language that is used to represent the DOM in the text. It’s indeed a textual representation of DOM in HTML document

1. Attributes are defined by HTML and properties are defined by DOM. 

2. The responsibility of HTML attributes is just to initialize DOM properties. And then later DOM properties can change but HTML attributes cannot. 

3. There are some HTML attributes that have corresponding DOM property and those DOM properties have corresponding HTML attributes such as id. 

4. There are also some HTML attributes that do not have corresponding DOM property such as colspan. 

5. There are also some DOM properties that do not have corresponding HTML attributes such as textContent. 

Example :app.component.html
<h2>Attribute Binding </h2>  
<table>  
    <tr>  
        <td [attr.colspan]="colSpanValue">td1</td>  
    </tr>  
</table>

-----------------------------------------------------------------------------------------------------------------------------------
    ------------------***Angular Class Binding***---------------------------------
Angular Class binding is used to add css classes dynamically based on the condition.
(If condition is true you can add the class and if it false you can remove the class)

Ex: Let’s  include the following CSS classes in the app.component.scss file.

// app.component.scss
    .boldClass{
    font-weight:bold;
}
.italicsClass{
    font-style:italic;
}
.success{
    color:green;
}

// app.component.html 
<button class="success">Click Me</button>  
// Here class success will be applied to button and it will display button text in green color

                ----------***Adding or Removing Single Class***-----------------

If you want to add or remove a single class, we need to include the prefix ‘class’ within a pair of square brackets, 
 followed by a DOT and then the name of the class that we want to add or remove
 
 The below example adds boldClass to the button element. Notice it does not remove the existing success already 
 added using the class attribute. If you change 'ApplyBoldClass' property to false or remove the property altogether 
 from the AppComponent class, CSS class boldClass is not added to the button element.
 
 Ex:
 // app.component.html
 <button class='success' [class.boldClass]='ApplyBoldClass'>Click Me</button>

//app.component.ts
export class AppComponent {
    ApplyBoldClass: boolean = true;
}

----> remove an existing class that is already applied

 The below example. Notice we have 3 classes (success, boldClass & italicsClass) added to 
 the button element using the class attribute. The class binding removes the boldClass
 
 //HTML File
<button class='success boldClass italicsClass' [class.boldClass]='ApplyBoldClass'>Click Me</button>

//Component File
export class AppComponent {
    ApplyBoldClass: boolean = false;
}

--- >  To add or remove multiple classes

If we want to add or remove multiple classes then we need to use ngClass directive

Ex :
//HTML file
<button class='success' [ngClass]="{'boldClass':true,'italicsClass':true}">My Button</button>

-------------------------------------------------------------------------------------------------------------------------------------------
                                  ------------------***Angular Style Binding***---------------------
 If you want to add or remove a single style property, we need to include the prefix ‘style’ within a pair of square brackets, 
 followed by a DOT and then the name of the css property that we want to add or remove
 
  The below example adds color to the button element based on the condition mentioned in componet class.
  Ex:
// component file
export class AppComponent {
    isRedColor: boolean = true; 
}

// HTML File
 <button [style.color]="isRedColor ? 'red' : 'black'">Click Me</button> 
// Here  it displays button with red color in browser because isRedColor property has true value in component 
 
---> Multiple Inline Styles
If we want to set multiple inline styles, then we need to use NgStyle directive as shown below
// component file
export class AppComponent {
    isRedColor: boolean = true; 
     IsBold: boolean = true;
    FontSize: number = 40;
    IsItalic: boolean = true;
}
// HTML file
<button class='success' [ngStyle]="{'color':this.isRedColor ? 'red' : 'blue','font-style': this.IsItalic ? 'italic' : 'normal','font-size.px': this.FontSize}">CLICK ME</button>
// Here We are appllying multiple css properties using ngstyle directive
