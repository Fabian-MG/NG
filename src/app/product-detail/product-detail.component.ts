import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MenuItem } from '../menu-item';
import { MenuItemsService } from '../menu-items.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productsLink: string;
  products: Array<any>


  constructor(
    private _route: ActivatedRoute,
    private menuItemsService: MenuItemsService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.productsLink = params.state;
      this.menuItemsService.getProducts(this.productsLink) .subscribe({
        next: (data) => {
          this.products = data.content.slice(1,10)
          console.log(this.products)
        }
      });
    });
    
  }
}
