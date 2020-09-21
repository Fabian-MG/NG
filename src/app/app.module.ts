import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TreeParentComponent } from './tree/tree-parent.component';
import { TreeChildComponent } from './tree/tree-child.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TreeParentComponent,
    TreeChildComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
