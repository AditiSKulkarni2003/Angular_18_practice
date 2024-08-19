import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visible: boolean=true;
  isDiv2Visible: boolean=false;

  num1: string='';
  num2:string='';

  constructor(private router:Router){}


  isActive:boolean =false;
  selectedState:string ='';

  cityArray:string []=['Pune','Mumbai','Nagpur','Thane'];

  studentList:any[]=[
    {studId:21,name:'AAA',city:'Pune',isActive:false},
    {studId:22,name:'BBB',city:'Mumbai',isActive:false},
    {studId:32,name:'CCC',city:'Thane',isActive:true},
    {studId:42,name:'DDD',city:'Nagpur',isActive:false},
    {studId:52,name:'EEE',city:'Nagar',isActive:false},
  ]

  showDiv1(){
    this.isDiv1Visible=true;
  }

  hideDiv1(){
    this.isDiv1Visible=false;
  }

  toggleDiv2(){
    this.isDiv2Visible=!this.isDiv2Visible;
  }


  navigatetoAttribute(){
    this.router.navigateByUrl("attr-dir")
  }
}
