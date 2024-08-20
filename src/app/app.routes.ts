import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './Componenets/add-employee/add-employee.component';
import { DatabindingComponent } from './Componenets/databinding/databinding.component';
import { EmployeeListComponent } from './Componenets/employee-list/employee-list.component';
import { AttributeDirectiveComponent } from './directives/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './directives/structural-directive/structural-directive.component';
import { ForComponent } from './Control flow/for/for.component';
import { IfelseComponent } from './Control flow/ifelse/ifelse.component';
import { SwitchComponent } from './Control flow/switch/switch.component';
import { PipeComponent } from './pipe/pipe.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component: AddEmployeeComponent
    },

    {
        path:'data-binding',
        component: DatabindingComponent
    },

    {
        path:'emp-list',
        component: EmployeeListComponent
    },
    
    
    {
        path:'attr-dir',
        component: AttributeDirectiveComponent
    },


    {
        path:'struct-dir',
        component: StructuralDirectiveComponent
    },
    {
        path:'app-for',
        component: ForComponent 
    },
    {
        path:'app-ifelse',
        component: IfelseComponent
    },
    {
        path:'app-switch',
        component: SwitchComponent
    },
    {
        path:'app-pipe',
        component: PipeComponent
    }


];
