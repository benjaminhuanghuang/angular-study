import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() featureSelected: string;

  constructor() {
    this.featureSelected = '';
  }
  public onNavigate(featureSelected: string) {
    this.featureSelected = featureSelected;
  }
}
