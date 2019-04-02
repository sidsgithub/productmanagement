import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEE } from '../employee-mock'

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
getdata(emp:Employee){
let student = {  
                id:emp.id,
                name: emp.name,
                email:emp.email,
                phone:emp.phone,
                };

                let data = JSON.stringify(student);
                console.log(data);
                 

} 






  validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  employees: Array<Employee> = [];

  employee: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: 0,
  };

  addEmployee(){
    this.employees.push(this.employee);
    this.employee = {
      id: 0,
      name: '',
      email : '',
      phone: 0,
    };
  }




  constructor() { }

  ngOnInit() {
  }
  mydata(mydata: any): any {
    throw new Error("Method not implemented.");
  }

}
