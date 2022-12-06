import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NewEmployeeFormComponent } from './new-employee-form/new-employee-form.component';
import { UpdateEmployeeFormComponent } from './update-employee-form/update-employee-form.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{
    path:'', 
    children:[
        {path:'', component: EmployeeListComponent}, 
        {path:'create', component: NewEmployeeFormComponent}, 
        {path:':id', component: EmployeeDetailsComponent},
        {path:'update/:id', component: UpdateEmployeeFormComponent}
    ]
}
]

@NgModule({
    declarations:[EmployeeListComponent, EmployeeDetailsComponent, NewEmployeeFormComponent, UpdateEmployeeFormComponent],
    imports:[CommonModule, HttpClientModule, FormsModule, RouterModule.forChild(routes)],
    exports:[EmployeeListComponent, EmployeeDetailsComponent, NewEmployeeFormComponent, UpdateEmployeeFormComponent]
}) 
export class EmployeeBaseModule{}