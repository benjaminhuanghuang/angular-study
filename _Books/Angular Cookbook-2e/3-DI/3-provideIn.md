
`providedIn: 'root'` for the NotificationService to tell Angular that it is only provided in the root module, and it should only have one instance in the entire app.

```ts
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  ...
}
```
In order to alert the developer about potential duplicate providers, we will use the @SkipSelf decorator 

```ts
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(@SkipSelf() existingService: NotificationsService) {
    if (existingService) {
      throw Error()'NotificationsService is already loaded');
    }
}
```
