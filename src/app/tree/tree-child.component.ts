import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item';
import { Tree } from '../tree-structure/tree';

@Component({
  selector: 'pm-tree-child',
  templateUrl: './tree-child.component.html',
  styleUrls: ['./tree-child.component.scss'],
})
export class TreeChildComponent implements OnInit {
  @Input() node: any;
  @Input() level: number;
  @Input() idx? = 0;
  @Input() tree: MenuItem;

  currentLevel: number;
  showChildren: boolean = false;

  displayName: string;

  parents = [];

  constructor() {}

  ngOnInit() {
    this.currentLevel = this.level + 1;
    this.displayName =
      this.node.name.charAt(0) + this.node.name.substring(1).toLowerCase();
  }

  handleShow(): void {
    this.showChildren = !this.showChildren;
  }

  // searchParents(node: MenuItem): void {
  //   if(this.node.parent === 'STORE#PRODUCTS') {
  //     return;
  //   }
  //   console.log(node.id)
  //   this.searchParents
  // }

  getParents(node: any): void {
    if (node.parent === null) {
      return;
    } else {
      this.parents.push(node.parent);
      console.log(this.parents);
      this.getParents(node.parent);
    }
  }

  isInChildren(menuOpt: any, menuId: string): boolean {
    if (!menuOpt.children) {
      return false;
    }
    let found = false;
    menuOpt.children.forEach((opt) => {
      const currentState = opt.active;
      opt.active = this.isInChildren(opt, menuId);
      if (opt.id === menuId) {
        found = true;
        opt.active = !currentState;
      }
    });
    return found;
  }
}
