import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TreeChildComponent } from './tree/tree-child.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SvgComponent } from './navbar/svgs/arrow.component';
import { SvgBellComponent } from './navbar/svgs/bell.component';
import { SvgConfigComponent } from './navbar/svgs/configuration.component';
import { SvgMailComponent } from './navbar/svgs/mail.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TreeChildComponent,
    NavbarComponent,
    SvgComponent,
    SvgBellComponent,
    SvgConfigComponent,
    SvgMailComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
