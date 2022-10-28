import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl:'./input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title : string = '';
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor () {}
  ngOnInit(): void {

  }
  //changeTitle(inputElementReference) {
    //console.log(inputElementReference);
    //this.title = inputElementReference.value;
  //}
  submitValue(title: string) {
    this.submit.emit(title)
    this.title= "";
  }

}
