import { Component } from '@angular/core';

@Component({
  selector: 'arrow-svg',
  template: `
    <svg
      class="arrow"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
      />
    </svg>
  `,
  styleUrls: ['./arrow.component.scss'],
})
export class SvgComponent {
}
