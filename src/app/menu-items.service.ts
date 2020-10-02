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

  private menusCollection: Array<MenuItem>;

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<Array<MenuItem>> {
    return this.http.get<Array<MenuItem>>(this.menuItemsUrl).pipe(
      tap((data) => (this.menusCollection = data)),
      catchError(this.handleError)
    );
  }

  getProducts(productsLink: string): Observable<any> {
    return this.http.get<any>(productsLink).pipe(catchError(this.handleError));
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
