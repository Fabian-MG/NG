import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pm-tree-child',
  templateUrl: './tree-child.component.html',
  styleUrls: ['./tree-child.component.scss']
})
export class TreeChildComponent implements OnInit {
  @Input() node: any;
  @Input() level: number
  currentLevel: number
  showChildren: boolean = false

  constructor() {}

  ngOnInit() {
    this.currentLevel = this.level + 1
  }

  handleShow(): void {
    this.showChildren = !this.showChildren
  }
}
