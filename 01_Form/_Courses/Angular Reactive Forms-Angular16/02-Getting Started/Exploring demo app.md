
Code
https://github.com/jmcooper/contacts-app


In memory API:
\src\app\contacts\in-memory-contacts.service.ts

```ts
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    HttpClientInMemoryWebApiModule.forRoot(InMemoryContactsApi, { delay: 200 })
  ],
```
The HTTP calls will be intercepted by the in memory API service.
