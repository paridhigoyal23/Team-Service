import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { EmployeeComponent } from "./employee.component";

import { WorkFromOfficeComponent } from "./components/work-from-office/work-from-office.component";

const routes: Routes = [   
{
    path:'wfo',
    component:WorkFromOfficeComponent
}
           
    ,
    {
        path:'team-members',
        component:EmployeeListComponent
    },
   
   
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmployeeRoutingModule {}
