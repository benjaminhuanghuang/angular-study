
## Binding (@Input, @Output)
- @Input('alias of property name'): Expose field to outside
- @Output('alias of event name'): Expose event to outside

parent
```
  <app-child [childMessage]="'Hello'" (messageEvent)="receiveMessage($event)"> </app-child>

  receiveMessage(msg) {
    alert(msg);
  }
```


Child
```
  import {Component, Input, Output} from '@angular/core';

  @Input() childMessage: string;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('send to parent');
  }

  <button (click)="sendMessage()">Send</button>
```


## Reference (@ViewChild, @ContentChild)
parent
```
  import {Component, ViewChild, AfterViewInit} from '@angular/core';

  @ViewChild(ChildComponent) child;


  ngAfterViewInit(){
    alert(this.child.message);
  }


```

## Provider (Service)


## Template Outlet
