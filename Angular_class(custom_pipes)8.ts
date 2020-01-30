Angular provides an option to create custom pipes. For exmple you have requirement is that depending
on the gender of the employee,you need to add Mr. or Misss. prefixed before the name of the employee.
So you can achieve this requirement by creating custom pipe

Step1: Let’s create a custom pipe with the name EmployeeTitlePipe.

Ex :1

//EmployeeTitle.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'employeeTitle'
})
export class EmployeeTitlePipe implements PipeTransform {
    transform(name: string, gender: string): string {
        if (gender.toLowerCase() == "male"){
 
            return "Mr." + name;
            }
        else{
            return "Miss." + name;
    }
}


1.Here First, you import the Pipe decorator and PipeTransform interface from the Angular core.
2.Then you decorated the “EmployeeTitlePipe” class with the Pipe decorator so that this class will become an Angular pipe
3.You then set the name property of the pipe decorator to employeeTitle so that you can use this name (employeeTitle)
on any HTML page where we want this pipe functionality.
4.The EmployeeTitlePipe class implements the PipeTransform interface and that interface has one method called transform()
and here you implement that method.
5.As you can see in the above code, the transform method takes 2 parameters (name and gender). 
The name parameter will receive the name of the employee whereas the gender parameter will receive the gender of the employee. 
The method returns a string i.e. Mr. or Miss. prefixed to the name of the employee depending on their gender.


Step2: Register the “EmployeeTitlePipe” in the angular module.
To do so, open the app.module.ts file, then import the EmployeeTitlePipe and include it 
in the “declarations” array of NgModule decorator as shown below.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeTitlePipe } from './employeeTitle.pipe';
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeTitlePipe],
    bootstrap: [AppComponent]
})
export class AppModule { }

Step3: Use the EmployeeTitlePipe in app.Component.html page

Here are passing the employee gender as an argument for the gender parameter of our custom pipe. 
The employee name gets passed automatically.

<table>
    <thead>
        <tr>
            <th>emp ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Salary</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor='let employee of employees'>
            <td>{{employee.id | uppercase}}</td>
            <td>{{employee.firstName | employeeTitle:employee.gender}}</td>
            <td>{{employee.gender}}</td>      
            <td>{{employee.dob | date:'fullDate' |uppercase}}</td>
            <td>{{employee.salary | currency:'USD':true:'1.2-2'}}</td>
        </tr>
        <tr *ngIf="!employees || employees.length==0">
            <td colspan="5">
                No Employees to display
            </td>
        </tr>
    </tbody>
</table>
