import { AssignmentComponent } from './../../assignment.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  Todo ;
  selectedRow : Number;
  getClickedRow : Function;
  constructor( arr: AssignmentComponent){
      this.Todo = arr.getTodos();
      this.getClickedRow = function(index){
      this.selectedRow = index; 
  }
}
 

}
