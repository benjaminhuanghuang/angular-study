

Reactive programming is about reacting to changes as soon as they are emitted!

observer design pattern, which is at the heart of reactive programming.

The observer pattern is based on two main roles: a publisher and a subscriber.


RxJS combines the `observer pattern` with the `iterator pattern` and `functional programming` to process and handle asynchronous events

- Observables: These are a representation of the data streams that notify the observers of any change.

- Observers: These are the consumers of the data streams emitted by observables.



```
@Injectable()
export class RecipesService {
  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${BASE_PATH}/recipes/search/all`);
  }
}
```