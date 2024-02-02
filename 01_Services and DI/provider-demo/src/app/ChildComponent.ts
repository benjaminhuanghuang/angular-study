import { Component } from "@angular/core";
import { SimpleService } from "./SimpleService";

@Component({
  selector: 'child',
  template: `
    <div class="child">
        <p>Child</p>
        {{ service.value }}
    </div>
 `,
  styles: [
    `
    .child {
      background-color: #239cDE;
      padding: 10px;
    }`
  ],
  providers: [SimpleService]
})
export class ChildComponent {
  constructor(public service: SimpleService) { }
}
