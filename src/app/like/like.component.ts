import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() like!: number;
  @Input() active!: boolean;

  @Output() buttonClickedEvent = new EventEmitter();

  buttonClicked() {
    this.buttonClickedEvent.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
