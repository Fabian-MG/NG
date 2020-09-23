import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  toggle: boolean;

  ngOnInit() {
    this.toggle = true;
  }

  handleSidebar(show: boolean): void {
    this.toggle = show;
  }
}
