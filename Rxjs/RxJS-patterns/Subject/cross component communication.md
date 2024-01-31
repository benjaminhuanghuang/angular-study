## Use subjects in service for cross component communication. 
```ts
import{ Injectable } from
import { Subject } from "rxjs";

@Injectable()
export class DataService{
  dataEmitter = new Subject<string>();
  
  raiseDataEmitterEvent (data: string){
    this. dataEmitter.next(data);
  }
}
```
