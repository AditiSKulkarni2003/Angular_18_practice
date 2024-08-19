import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
[x: string]: any;
  div1BgColor: string='';
  num1: string ='';
  num2: string ='';

  isActive: boolean=false;

  isDiv2Active: boolean=false;

  studentList:any[]=[
    {studId:21,name:'AAA',gender:'Male',city:'Pune',totalMarks:60,isActive:false},
    {studId:22,name:'BBB',gender:'FeMale',city:'Mumbai',totalMarks:40,isActive:false},
    {studId:32,name:'CCC',gender:'Male',city:'Thane',totalMarks:65,isActive:true},
    {studId:42,name:'DDD',gender:'FeMale',city:'Nagpur',totalMarks:50,isActive:false},
    {studId:52,name:'EEE',gender:'Male',city:'Nagar',totalMarks:90,isActive:false},
  ]

  addRedClass(){
    this.div1BgColor='bg-danger';
  }

  addBlueClass(){
    this.div1BgColor='bg-primary';
  }
  toggleDiv2Class(){
    this.isDiv2Active=!this.isDiv2Active;
  }

}
