import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TreeChildComponent } from './tree/tree-child.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SvgComponent } from './navbar/svgs/arrow.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TreeChildComponent,
    NavbarComponent,
    SvgComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
