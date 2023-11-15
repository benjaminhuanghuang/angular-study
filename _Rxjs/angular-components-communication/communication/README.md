Service using 
```
import {Subject}from 'rxjs';
```
and 
```
import { EventEmitter, Injectable } from "@angular/core";
```



```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // provide DataService to AppComponent and all its sub components
  providers: [DataService]
})
export class AppComponent {
```
