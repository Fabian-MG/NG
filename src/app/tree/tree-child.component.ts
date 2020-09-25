import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'pm-tree-child',
  templateUrl: './tree-child.component.html',
  styleUrls: ['./tree-child.component.scss'],
})
export class TreeChildComponent implements OnInit {
  @Input() node: any;
  @Input() level: number;
  @Input() idx? = 0;

  currentLevel: number;
  showChildren: boolean = false;

  displayName: string
  

  constructor() {}

  ngOnInit() {
    this.currentLevel = this.level + 1;
    this.displayName = this.node.name.charAt(0) + this.node.name.substring(1).toLowerCase();
  }

  handleShow(): void {
    this.showChildren = !this.showChildren;
  }

  searchParents(node: MenuItem): void {
    if(this.node.parent === 'STORE#PRODUCTS') {
      return;
    }
    console.log(node.id)
    this.searchParents
  }

  // private isInChildren(menuOpt: MenuOption, menuId: string): boolean {
  //   let found = false;
  //   menuOpt.children.forEach(opt => {
  //     const currentState = opt.active;
  //     opt.active = this.isInChildren(opt, menuId);
  //     if (opt.id === menuId) {
  //       found = true;
  //       opt.active = !currentState;
  //     }
  //   });
  //   return found;
  // }
}
