import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'collapsable-well',
  templateUrl: './collapsable-well.component.html',
  styleUrls: ['./collapsable-well.component.css']
})
export class CollapsableWellComponent implements OnInit {
  visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleContent() {
    this.visible = !this.visible;
  }
}
