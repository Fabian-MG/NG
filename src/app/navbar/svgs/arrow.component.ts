import { Component } from '@angular/core';

@Component({
  selector: 'arrow-svg',
  templateUrl: './arrow.component.svg',
  styleUrls: ['./arrow.component.scss'],
})
export class SvgComponent {
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}