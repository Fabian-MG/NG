import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MenuItemsService } from '../menu-items.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  errorMessage: string = '';
  menuItems: Array<MenuItem>;
  @Input() show: boolean;

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
      scope: '',
      status: '',
      name: '',
      type: '',
      score: '',
      image: '',
      links: [],
      icon: '',
      active: false,
      isLeaf: false,
    };

    let rootedData = [...items, rootElement];

    const idMapping = rootedData.reduce((tree, element, i) => {
      tree[element.id] = i;
      return tree;
    }, {});

    rootedData.forEach((node) => {
      node.active = false;
      node.children ? (node.isLeaf = false) : (node.isLeaf = true);

      if (node.parent === 'STORE#PRODUCTS') {
        switch (node.id) {
          case 'STORE#PRODUCTS#GENRE#CABALLERO':
            node.icon = 'fa fa-user';
            break;
          case 'STORE#PRODUCTS#GENRE#DAMA':
            node.icon = 'fa fa-female';
            break;
          case 'STORE#PRODUCTS#GENRE#JOVEN':
            node.icon = 'fa fa-male';
            break;
          case 'STORE#PRODUCTS#GENRE#KIDS':
            node.icon = 'fa fa-child';
            break;
          case 'STORE#PRODUCTS#GENRE#UNISEX':
            node.icon = 'fa fa-users';
            break;
          default:
            break;
        }
      }

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

    console.log(this.tree);
  }
}
