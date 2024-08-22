import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  studentobj : any = {
    firstName : '',
    lastName : '',
    userName : '',
    city : '',
    state : '',
    zipcode : '',
    isAcceptTerms : false

  }

  formsValue : any;
  onSubmit(){
    debugger;
    this.formsValue=this.studentobj;
  }

  resetForm(){
    this.studentobj= {
      firstName : '',
    lastName : '',
    userName : '',
    city : '',
    state : '',
    zipcode : '',
    isAcceptTerms : false


    }
  }

}
