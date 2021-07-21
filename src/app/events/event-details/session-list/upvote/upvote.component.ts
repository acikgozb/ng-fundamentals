import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Output()
  vote: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  count: number = 0;

  @Input()
  voted: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.vote.emit();
  }
}
