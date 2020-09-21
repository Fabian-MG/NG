import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MenuItem } from './menu-item';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MenuItemsService {
  private menuItemsUrl =
    'https://cloud-rest.grabasaweb.mx/store/menus/products';

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<Array<MenuItem>> {
    return this.http.get<Array<MenuItem>>(this.menuItemsUrl).pipe(
      tap((data) => {
        const rootElement = {
          app: 'STORE',
          id: 'STORE#PRODUCTS',
          image: 'ico.svg',
          links: [],
          name: 'ACCESORIOS PARA CABALLERO',
          parent: null,
          scope: 'MENU',
          score: 900,
          status: 'AC',
          type: 'PRODUCTS',
        };
        let rootedData = [...data, rootElement];

        const idMapping = rootedData.reduce((acc, el, i) => {
          acc[el.id] = i;
          return acc;
        }, {});

        let root;
        rootedData.forEach((el) => {
          // Handle the root element
          if (el.parent === null) {
            root = el;
            return;
          }
          // Use our mapping to locate the parent element in our data array
          const parentEl = data[idMapping[el.parent]];
          // Add our current el to its parent's `children` array
          parentEl.children = [...(parentEl.children || []), el];
        });

        console.log(root);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
