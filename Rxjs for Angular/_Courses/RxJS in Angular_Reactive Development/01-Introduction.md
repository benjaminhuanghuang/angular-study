## RxJS in Angular
Routing
```
    this.route.paramMap
    this.route.data
    this.route.events
```


Reactive Forms
```
    this.productForm.valueChanges
```


HttpClient
```
    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this.url);
    }
```


      