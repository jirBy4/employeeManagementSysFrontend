import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee-service';

@Component({
  selector: 'app-update-employee-form',
  templateUrl: './update-employee-form.component.html',
  styleUrls: ['./update-employee-form.component.css']
})
export class UpdateEmployeeFormComponent implements OnInit {

  employee: Employee = new Employee();
  id!: number;
  constructor(private employeeService: EmployeeService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
      (e: Error) => console.log(e);
    })
  }

  onSubmit(){
    this.employeeService.updateEmployeeById(this.id, this.employee).subscribe(data => {
      console.log(data)
      this.goToEmployeeList();
      (e: Error) => console.log(e);
    });
  }
  
  goToEmployeeList(){
      this.router.navigate(['/employees']);
    }
}
