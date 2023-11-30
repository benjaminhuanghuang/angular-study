The navigation bar will be visible on every page at all times.

## routerLink
Do not use html anchor tag to navigate to a path in Angular application.
```
<a href='/path'> </a>
```
That will cause the whole application get reloaded.


Use routerLink in Angular application.
```
<a routerLink="/">
```
Angular will update the URL in the browser address bar and render the component in the router outlet,
but not issue an entire now browser request to that URL.


## Style the Active Link
```html
  <a routerLink="/thePath" routerLinkActive="active" class="">
```
The routerLinkActive means that whenever this router link is being visited by the user, apply the `active` class to the element.
