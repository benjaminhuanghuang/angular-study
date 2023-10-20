# Angular dependency injection in depth – Dependency providers (2021)


```
export interface ILogger {
  prefix = 'root';
  log (message: string) => void;
}


@Injectable({
  providedIn: 'root',
})
export class LoggerService implements ILogger {
  prefix = 'root';
  constructor() {}
  log (message: string): void {
    console. log('$(this.prefix): $(message)*);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements Logger {
  prefix = 'root';
  constructor() { }
    log (message: string): void {
    console. log('$(this.prefix) (experimental) :| $(message)`);
  }
}



@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app. component.css'],
  providers: [{
    provide: LoggerService, useCase: ExperimentalLoggerService
  }],           
})
export class AppComponent implements OnInit {
  constructor (private logger: LoggerService) ()
}


```