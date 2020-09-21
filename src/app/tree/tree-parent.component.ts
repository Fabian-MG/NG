import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Tree } from '../tree-structure/tree';
import { TreeNode } from '../tree-structure/tree-node';

@Component({
  selector: 'app-tree-parent',
  template: `
    <h2>Tree data visualized</h2>

    <div *ngIf="treeNode">
      <app-tree-child
        *ngFor="let ch of treeNode.children"
        [node]="ch"
      ></app-tree-child>
    </div>
  `,
})
export class TreeParentComponent implements OnInit {
  @Input() tree: Tree<string>;

  treeNode: TreeNode<any>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tree'] && this.tree != null) {
      this.treeNode = this.tree.getRoot();
    }
  }

  constructor() {}

  ngOnInit() {}
}
