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
  title: string;

  // constructor(
  //   private route: ActivatedRoute,
  //   private menuItemService: MenuItemsService,
  //   private router: Router
  // ) {}

  // ngOnInit(): void {
  //   this.title = this.route.snapshot.url[1].path
  //   this.menuItemService.getProducts(this.title)
  //   console.log(this.title)
  // }

  theRecord: any;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.title = params.state;
    });
  }
}
