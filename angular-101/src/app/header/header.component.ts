import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // define a event
  @Output() featureSelected = new EventEmitter<string>();

  public onFeatureSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
