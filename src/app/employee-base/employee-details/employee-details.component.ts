import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee-service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee! : Employee; 
  id!: number;

  constructor(private employeeService: EmployeeService, 
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.getEmployee();
  }

  private getEmployee(){
    this.id = this.route.snapshot.params['id'];
    this.employee = {} as Employee;
    this.route.params.subscribe((data: Params) => {
      this.employeeService.getEmployeeById(this.id).subscribe((data: Employee) => {
        this.employee = data;})
  });
}
  
  deleteEmployee(id:number){
    this.employeeService.deleteEmployeeById(id).subscribe(data => {
      this.back();
    })
  }
  back(): void {
    this.router.navigate(['/employees'])}
}
