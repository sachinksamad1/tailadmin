import { Component } from "@angular/core";

@Component({
  selector: "app-chevron-down-icon",
  standalone: true,
  template: `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  `,
    styles: [`
    :host {
      display: block;
      width: 24px;
      height: 24px;
    }
  `]
})
export class ChevronDownIconComponent {}