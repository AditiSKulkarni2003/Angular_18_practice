import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

isDiv1Visible: boolean=true;

isWarningDivVisible : boolean=false;

selectedStatus: string='';

num1 ='';
num2 ='';
Active: any;
De: any;
showDiv1(){
  this.isDiv1Visible=true;
}

hideDiv1(){
  this.isDiv1Visible=false;
}

toggleDiv2(){
  this.isWarningDivVisible=!this.isWarningDivVisible
}
}
