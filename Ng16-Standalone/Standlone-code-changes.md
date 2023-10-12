## main.ts
```
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```
router is defined in appConfig


## app.component.ts
```
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'seven-segment';
}

```
