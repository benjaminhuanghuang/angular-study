# Async pipe

Async pipe allows you to use an observable or promise `directly` in Angular template without needing to subscribe to it or await a result.

Async pipe automatically subscribes & unsubscribes

```
    // components.page.html
    *ngFor="let client of clients$ | async"



    // component.ts
    public clients$: Observable<Client[]>;    
    ogOnInit() {
        this.clients = this.clientsService.getClients();
    }
```


```
    {{(client$ | async)?.name.first}}

```

- avoid subscribes & unsubscribes multi-times
```
   
    <ng-container *ngIf"client& | async as client">
        {{client.name.first}} {{client.name.last}}
    </ng-container>
```

- display loading 
```
    <div *ngIf"client& | async as client; else loading">
        {{client.name.first}} {{client.name.last}}
    </div>

    <ng-template #loading>
        <h2>Loading ...<h2>
    </ng-template>
```

