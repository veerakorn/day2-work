import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dislike',
  templateUrl: './dislike.component.html',
  styleUrls: ['./dislike.component.css']
})
export class DislikeComponent implements OnInit {
  @Input() dislike!: number;
  @Input() active!: boolean;

  @Output() buttonClickedEvent = new EventEmitter();

  buttonClicked() {
    this.buttonClickedEvent.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
