import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee-service';
import { Router } from '@angular/router';
import {Employee} from 'src/app/models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  @ViewChildren('employeeRef') employeeRef!: ElementRef;

  constructor(private employeeService: EmployeeService, private router: Router) {
      this.employees = []
    }

  ngOnInit(): void {
    this.getEmployees();
    }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe((data: Employee[]) => {
      this.employees = data;});
  }

  back(): void {
    this.router.navigate(['/'])}
}
