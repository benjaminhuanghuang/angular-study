
## Binding (@Input, @Output)
- @Input('alias of property name'): Expose field to outside / parent

- @Output('alias of event name'): Expose event to outside / parent

parent
```
  <app-child [childMessage]="'Hello'" (messageEvent)="receiveMessage($event)"> </app-child>

  receiveMessage(msg) {
    alert(msg);
  }
```


Child
```
  import {Component, Input, EventEmitter} from '@angular/core';

  @Input() childMessage: string;

  @Output() messageEvent = new EventEmitter<{name:string, content:string}>();

  sendMessage() {
    // emit event
    this.messageEvent.emit({name:'send to parent', content:'the content');
  }

  <button (click)="sendMessage()">Send</button>
```

## Local Reference
```
  <input type="text" #userNameInput/>

  // use the refercne in the template
  <button (click)="onAdd(userNameInput.value)"
```


## Reference (@ViewChild, @ContentChild)
parent
```
  import {Component, ViewChild, AfterViewInit} from '@angular/core';

  @ViewChild(ChildComponent) child;

  @ViewChild('inputId') child;


  ngAfterViewInit(){
    // use the reference
    alert(this.child.message);
  }

```
`DO NOT` operate reference to HTML elements directly
## Provider (Service)


## Template Outlet
