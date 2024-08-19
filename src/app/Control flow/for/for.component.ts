import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
[x: string]: any;

  
  cityArray:string []=['Pune','Mumbai','Nagpur','Thane'];

  studentList:any[]=[
    {studId:21,name:'AAA',city:'Pune',isActive:false},
    {studId:22,name:'BBB',city:'Mumbai',isActive:false},
    {studId:32,name:'CCC',city:'Thane',isActive:true},
    {studId:42,name:'DDD',city:'Nagpur',isActive:false},
    {studId:52,name:'EEE',city:'Nagar',isActive:false},
  ]
}
