

```ts
import { Component, inject } from '@angular/core';

@Component ({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent{
  //1. HOW TO PROVIDE DEPENDENCY
  // constructor (private subService: SubscribeService) {
  // }

  subService = inject(SubscribeService); 
  
  OnSubscribe(){
    this. subService.OnSubscribeClicked('yearly');
  }
}
```
