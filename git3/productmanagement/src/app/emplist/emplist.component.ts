import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEE } from '../employee-mock'

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  employees: any = EMPLOYEE;

  employee: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: 0,
  };

  onEdit(emp:Employee) {
    // this.products = this.products.filter( i => i.id !== prod.id+1);
    this.employee = {
      id: emp.id+1,
      name: emp.name,
      email: emp.email,
      phone: emp.phone,
    
    }
    // this.products = this.products.filter( i => i.id !== prod.id+1);
    this.employees.push(this.employee);


    }

  addEmployee(){
    this.employees.push(this.employee);
    // this.employee = {
    //   id: 0,
    //   name: '',
    //   email : '',
    //   phone: 0,
    // };
  }

  onDelete(index: number){
    this.employees.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
