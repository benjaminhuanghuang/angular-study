
## What
https://angular.io/guide/defer

defer the loading of select dependencies within that template. 
Can be used to `reduce the initial bundle size` of your application or defer heavy components that may not ever be `loaded until a later time`.

Those dependencies include components, directives, and pipes, and any associated CSS.
```
@defer {
  <large-component />
}
```

## How
Deferrable views support a series of `triggers`, `prefetching`, and several `sub blocks` used for placeholder, loading, and error state management. 

You can also create `custom conditions` with when and prefetch when.
