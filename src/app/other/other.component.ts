import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  @Input() name: any;

  @Output() changedNameEvent = new EventEmitter<any>();
  
  //nameObj = {id: 1, name:'test2'};
  nameObj = new User(1, 'test3');
  
  changeMeClicked(){
    console.log('welcome');
    this.changedNameEvent.emit(this.nameObj);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
