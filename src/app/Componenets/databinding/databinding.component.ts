import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  coursename: string = "Angular_18";

  inputType = "checkbox";

  rollNo: number=123;

  myClassName:string ="bg-primary";

  isIndian: boolean = false;

  currentDate: Date = new Date();

  stateName:string ="Maharashtra";

  firstName = signal("Aditi")

  constructor(){
    
  }

  showAlert(message: string){
    alert(message);
  }


}
