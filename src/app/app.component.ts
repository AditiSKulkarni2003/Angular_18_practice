import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './Componenets/add-employee/add-employee.component';
import { EmployeeListComponent } from './Componenets/employee-list/employee-list.component';
import { DatabindingComponent } from './Componenets/databinding/databinding.component';
import { StructuralDirectiveComponent } from './directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './directives/attribute-directive/attribute-directive.component';
import { ForComponent } from './Control flow/for/for.component';
import { IfelseComponent } from './Control flow/ifelse/ifelse.component';
import { SwitchComponent } from './Control flow/switch/switch.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplateComponent } from './Form/template/template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatabindingComponent,StructuralDirectiveComponent,
    AttributeDirectiveComponent,RouterLink,ForComponent,IfelseComponent,
    SwitchComponent,PipeComponent, TemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_18';
}
