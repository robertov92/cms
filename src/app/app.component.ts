import { Component } from '@angular/core';

@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedFeature: string = "documents"
  title = 'cms';

  switchView(selectedFeature: string) {
    this.selectedFeature = selectedFeature;
  }
}
