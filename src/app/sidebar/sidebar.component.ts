import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MenuItemsService } from '../menu-items.service';

@Component({
  selector: 'np-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  errorMessage: string = '';
  menuItems: Array<MenuItem>;

  level = -1;
  tree: any;

  constructor(private menuItemService: MenuItemsService) {}

  ngOnInit(): void {
    this.menuItemService.getMenuItems().subscribe({
      next: (data) => this.transformData(data),
      error: (error) => (this.errorMessage = error),
    });
  }

  transformData(items: Array<MenuItem>): void {
    const rootElement = {
      app: 'STORE',
      id: 'STORE#PRODUCTS',
      parent: null,
      children: [],
    };

    let rootedData = [...items, rootElement];

    const idMapping = rootedData.reduce((tree, element, i) => {
      tree[element.id] = i;
      return tree;
    }, {});

    rootedData.forEach((node) => {
      if (node.parent === null) {
        this.tree = node;
        return;
      }
      const parentEl: any = rootedData[idMapping[node.parent]];
      parentEl.children = [
        ...(parentEl.children ? parentEl.children : []),
        node,
      ];
    });
  }
}
