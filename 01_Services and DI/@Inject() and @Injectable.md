https://angular-training-guide.rangle.io/di/angular2/inject_and_injectable


## @Inject()
@Inject() is a manual mechanism for letting Angular know that a parameter must be injected. It can be used like so:
```
import { Component, Inject } from '@angular/core';
import { ChatWidget } from '../components/chat-widget';

@Component({
  selector: 'app-root',
  template: `Encryption: {{ encryption }}`
})
export class AppComponent {
  encryption = this.chatWidget.chatSocket.encryption;

  //
  constructor(@Inject(ChatWidget) private chatWidget) { }
}
```



## @Injectable()
@Injectable() lets Angular know that a class can be used with the dependency injector. 
