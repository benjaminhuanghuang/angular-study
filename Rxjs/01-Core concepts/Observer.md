
A Observer is a consumer that define how you want do when values is coming in sequences. 
It is just a plan object that has next , error , and complete . It represents a specific operation wait to be called.
```
export interface Observer {
  next: (value?: any) => void;
  error: (error: any) => void;
  complete: () => void;
}

export type SubcribeFunction = (observer: Observer) => void
```
