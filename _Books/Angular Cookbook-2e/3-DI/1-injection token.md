
This is a tightly coupled code:
```ts
export class AppComponent implements OnInit {
  jokes = new JokeService();   // tightly coupled!
  
  ngOnInit() {
    
  }
}
```

Create a InjectionToken
```ts
import { InjectionToken } from '@angular/core';

export const JOKES = new InjectionToken('Jokes', {
  providedIn: 'root', // there will be only one instance of the class in the entire application.
  factory: () => new Jokes(),
});

class Jokes {...}

export default Jokes;
```

Inject the service into component using the InjectionToken
```ts
  jokes = inject(JOKES);
```

Note, we did not use @Injectable() decorator for the service class.
Angular recognizes the injection tokens and call the factory function in the definition of the injection token.
