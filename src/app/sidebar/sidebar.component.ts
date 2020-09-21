import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '../menu-items.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  errorMessage: string = 'S';
  menuItems: Array<any>;

  constructor(private menuItemService: MenuItemsService) {}

  
  ngOnInit(): void {
    console.log('on Init');
    this.menuItemService.getMenuItems().subscribe({
      next: (menuItems) => {
        this.menuItems = menuItems;
      },
      error: (error) => (this.errorMessage = error),
    });
  }
}
