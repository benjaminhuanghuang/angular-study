## If-else, switch
```html
@if (data(); as item) {
    @switch(item. type) {
      @case ('posts') {
        <app-post-list [posts]="item.payload" />
      }
      @case( 'users') {
        <app-user-list [users]="item payload" />
      }
      @default {
       <div class="unknown">Unknown Data Type...</div>
      }
  }
}
@else {
  <p>No data or loading…</p>
}
```

## For loop
```html
  @for (user of users) {
    <div class="item">Item {{ i }}</div>
  }

```
