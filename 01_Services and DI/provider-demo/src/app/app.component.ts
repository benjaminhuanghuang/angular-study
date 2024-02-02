import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="row">
   <div class="col-xs-6">
     <parent></parent>
   </div>
   <div class="col-xs-6">
     <parent></parent>
   </div>
 </div>
  `
})
export class AppComponent {
}
