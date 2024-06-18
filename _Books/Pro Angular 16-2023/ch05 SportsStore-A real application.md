# 5 SportsStore: A real application

## Pagination

store.component.ts


## Custom Directives

CounterDirective

```ts
  <button *ngFor="let page of pageNumbers()" 
          (click)="changePage(page)"
          class="btn btn-outline-primary" 
          [class.active]="page == selectedPage()">
      {{page}}
  </button>
```

to

```ts
<button *counter="let page of pageCount()" 
        (click)="changePage(page)"
        class="btn btn-outline-primary" 
        [class.active]="page == selectedPage()">
    {{page}}
</button>
```
