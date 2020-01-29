                              ------------PIPES IN ANGULAR-------------
                              
Pipes are used to format or transform the data. It is denoted by | symbol. you can call this as pipe operator.
Pipe takes integers, strings, arrays, and date as input separated with |. It transforms the data in the format
as required and displays the same in the browser.

Angular provides some pre-defined or built-in pipes
1.Lowercase
2.Uppercase
3.Titlecase
4.Slice
5.Json Pipe
6.Number Pipe or Decimal Pipe
7.Percent Pipe
8.Currency Pipe
9.Date Pipe

Syntax : To apply a pipe on a property, you need to use the pipe character ” | ” 
<p>{{property | pipename}}</p>

----------------------------------------------------------------------------------

1.Lowercase pipe - It will transformas/converts text into lower-case letters

Ex:
// app.component.html
<p>{{title | lowercase}}</p> // It will prints output as "welcome to vlr" in browser

// app.cpmponent.ts
export class AppComponent {
   title = 'Welcome to VLR';
}
----------------------------------------------------------------------------------------------

2.Uppercase pipe - It will transformas/converts text into upper-case letters

Ex:
// app.component.html
<p>{{title | uppercase}}</p> // It will prints output as "ANGULAR PIPES" in browser

// app.cpmponent.ts
export class AppComponent {
   title = 'angular pipes';
}
--------------------------------------------------------

3.Titlecase pipe - It will transformas/converts the first letter of a word into uppercase

Ex:
// app.component.html
<p>{{title | titlecase}}</p> // It will prints output as "Welcome To Angular  Pipes" in browser

// app.cpmponent.ts
export class AppComponent {
   title = 'welcome to angular pipes';
}
------------------------------------------------------------------------------------------

4.Slice pipe - It will returns a slice of text if the property is text and slice of an array if the property is array.
The first argument is the start index of the slice and the second argument is the end index.

syntax : <p>{{property | slice:startIndex:endIndex}}</p>

Ex1: slice with start and end index 
// app.component.html
<p>{{title | slice:1:4}}</p> // It will prints output as "elc" in browser
// Here 1 is starting index of string
// Here 4 is the ending index (It will excludes the end index and slices upto 3rd index)

Ex2: slice with only start index 
// app.component.html
<p>{{title | slice:1}}</p> // It will prints output as "elcome to HYD" in browser
// Here 1 is starting index of string and you haven't apply any end-index. so it will slices entire text from the first index

Ex3: slice with end-index as negative values
// app.component.html
<p>{{title | slice:1:-1}}</p> // It will prints output as "elcome to HY" in browser
// Here 1 is starting index of string
// Here -1 is the ending index

Ex4: slice with start and end index 
// app.component.html
<p>{{months | slice:1:4}}</p> // It will prints output as "feb,march,apr" in browser
// Here 1 is starting index of string
// Here 4 is the ending index (It will excludes the end index and slices upto 3rd index)

Ex2: slice with only start index 
// app.component.html
<p>{{title | slice:2}}</p> // It will prints output as "march,apr,may,june,july,aug" in browser
// Here 1 is starting index of string and you haven't apply any end-index. so it will slices entire text from the first index

Ex3: slice with end-index as negative values
// app.component.html
<p>{{title | slice:3:-1}}</p> // It will prints output as "apr,may,june,july" in browser
// Here 1 is starting index of string
// Here -1 is the ending index


// app.cpmponent.ts
export class AppComponent {
   title = 'welcome to HYD';
  months=['jan','feb','march','apr','may','june','july','aug']
}
---------------------------------------------------------------------------------

5.JSON pipe - It will transforms/converts a JavaScript object into a JSON string,

Ex:
// app.component.html
<p>{{employee | json}}</p> // It will prints output as {"name":"Venkat","age":"25"} in browser

// app.cpmponent.ts
export class AppComponent {
   employee = {name:"Venkat",age:25}
}
-----------------------------------------------------------------------------------
  
6.Number pipe or Decimal Pipe - It is used for transformation of decimal numbers.

syntax : {{numberValue | number: {minIntegerDigits}.{minFractionDigits}-{maxFractionDigits} }}

minIntegerDigits: Minimum number of integer digits to show before decimal point(Default value is 1)
minFractionDigits: Minimum number of integer digits to show after the decimal point(Default value is 0)
maxFractionDigits: Maximum number of integer digits to show after the decimal point(Default value is 3)

Ex:
// app.component.html
<p>{{numberValue |number:'3.1-2'}}</p> // It will prints output as " 003.14 " in browser
<p>{{numberValue |number:'1.2-2'}}</p> // It will prints output as " 3.14 " in browser

// app.cpmponent.ts
export class AppComponent {
   numberValue = 3.14156
}
-----------------------------------------------------------------------------------------
7.Percent Pipe - It is used for transformation of numbers into percentages.

syntax : {{numberValue | percent }}


Ex:
// app.component.html
<p>{{numberValue |percent}}</p> // It will prints output as " 12.3456 " in browser
<p>{{numberValue |percent:'2.1-2'}}</p> // It will prints output as " 12.35 " in browser

// app.cpmponent.ts
export class AppComponent {
   numberValue = 0.123456
}
---------------------------------------------------------------------------------------------
8.Currency Pipe - It is used for formatting currencies. By default, the currency is USD but you can change
it by specifying the country name.

syntax : {{numberValue | currency }}


Ex:
// app.component.html
<p>{{numberValue |currency}}</p> // It will prints output as " $123 " in browser
<p>{{numberValue |currency:'INR'}}</p> // It will prints output as " ₹123.00" in browser
<p>{{numberValue |currency:'INR':symbol:'1.0-0'}}</p> // It will prints output as " ₹123" in browser
<p>{{numberValue |currency:'GBP':symbol:'1.0-0'}}</p> // It will prints output as " £123" in browser


// app.cpmponent.ts
export class AppComponent {
   numberValue =123
}
------------------------------------------------------------------------------------------------
9.Date Pipe - It is used for the transformation of dates.

syntax : {{dateValue | date }}


Ex:
// app.component.html
  <p>{{today | date}}</p>       // It will prints output as " Jan 28, 2020 " in browser
  <p>{{today | date:'short'}}</p>   // It will prints output as "1/28/20, 8:16 PM" in browser
  <p>{{today | date:'medium'}}</p>  // It will prints output as "Jan 28, 2020, 8:19:20 PM" in browser
  <p>{{today | date:'full'}}</p>     // It will prints output as "Tuesday, January 28, 2020 at 8:20:05 PM GMT+05:30" in browser
  <p>{{today | date:'long'}}</p>     // It will prints output as "January 28, 2020 at 8:21:25 PM GMT+5" in browser
  <p>{{today | date:'shortDate'}}</p>     // It will prints output as "J1/28/20" in browser
  <p>{{today | date:'mediumDate'}}</p>   // It will prints output as "Jan 28, 2020" in browser
  <p>{{today | date:'longDate'}}</p>  // It will prints output as "January 28, 2020" in browser
  <p>{{today | date:'fullDate'}}</p>     // It will prints output as "Tuesday, January 28, 2020" in browser
  <p>{{today | date:'shortTime'}}</p>     // It will prints output as "8:27 PM" in browser
  <p>{{today | date:'mediumTime'}}</p>     // It will prints output as "8:27:28 PM" in browser
  <p>{{today | date:'fullTime'}}</p>   // It will prints output as "8:27:54 PM GMT+05:30" in browser
  <p>{{today | date:'longTime'}}</p>  // It will prints output as "8:28:13 PM GMT+5" in browser



// app.cpmponent.ts
export class AppComponent {
    today: number = Date.now();
}
