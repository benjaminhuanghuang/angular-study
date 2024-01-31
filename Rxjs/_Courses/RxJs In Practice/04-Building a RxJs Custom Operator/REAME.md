## Building a RxJs Custom Operator
- Implementing a Custom RxJs Operator - the Debug Operator

- The RxJs Debug Operator - Implementation Conclusion
```
import { Observable, tap } from "rxjs";

export enum RxJsLoggingLevel {
    TRACE,
    DEBUG,
    INFO,
    ERROR
}

let rxJsLoggingLevel = RxJsLoggingLevel.INFO;


export function setRxJsLoggingLevel(level: RxJsLoggingLevel) {
    rxJsLoggingLevel = level;
}

export const debugOpt = (level: number, message: string) => (source: Observable<any>) => source
    .pipe(
        tap(val => {
            if (level >= rxJsLoggingLevel) {
                console.log(message + " : " + val);
            }
        }),
    );
```
- The RxJs `forkJoin` Operator - In-Depth Explanation and Practical Example
    Launch several tasks in parallel
```
    forkJoin(course$, lesson$)
        .pipe(
            tap(([course, lessons])=>{

            })
        );
```
