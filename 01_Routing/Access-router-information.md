## The router
```
const routes: Routes = [
  { path: '', redirectTo: '/listings', pathMatch: 'full' },
  { path: 'listings', component: ListingsPageComponent, pathMatch: 'full' },
  { path: 'listings/:id', component: ListingDetailPageComponent },
];
```


## The List
```
  <a routerLink="/listings/{{listing.id}}">
```

## Get parameter information
This.route.snapshot simple describes what the URL is right now.
```ts
import { ActivatedRoute } from '@angular/router';

export class ListingDetailPageComponent implements OnInit {
  // Inject 
  constructor(private route: ActivatedRoute) { }

  // read parameter
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
  }
}
```

The this.route.params observable emits values whenever some specific part of the URL changes. 
```ts
export class ListingDetailPageComponent implements OnInit {
  // Inject 
  constructor(private route: ActivatedRoute) { }

  // read parameter
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }
}
```
