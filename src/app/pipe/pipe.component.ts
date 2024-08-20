import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { NaPipe } from '../na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NaPipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe,AsyncPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstname : string = 'Aditi';

  sentence : string ="welcome to angular";

  currentDate : Date = new Date();

  currentTime :Observable <Date> =new Observable<Date>

  constructor(){
    this.currentTime=interval(1000).pipe(map(()=>new Date()));
  }

  student : any ={
    name : 'Aditi',
    city:'Pune',
    empId: 'W191671',
    state:'MH'
  }

}
