
## Create Service
```
  ng g service services/<service-name>
```

## BehaviorSubject & Observable in service
```
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';    // <-- 

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  // private BehaviorSubject variable
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  count$: Observable<number> = this.count.asObservable();

  constructor() { }

  setCount(countVal) {
    this.count.next(countVal);
  }
}
```

## Observable variable in component
```
import { Observable } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';

export class NotificationsManagerComponent implements OnInit {
  notificationsCount$: Observable<number>;

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$;
  }
  ...
}

```

## Show Observable variable in tempalte
```
<div>
  Notifications Count: {{notificationsCount$ | async}}
</div>
```