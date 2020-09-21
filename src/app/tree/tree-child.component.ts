import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from '../tree-structure/tree-node';

@Component({
  selector: 'app-tree-child',
  templateUrl: './tree-child.component.html',
})
export class TreeChildComponent implements OnInit {
  @Input() node: TreeNode<string>;

  constructor() {}

  ngOnInit() {}
}
