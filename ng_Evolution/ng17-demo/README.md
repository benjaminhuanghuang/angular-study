# Ng17Demo

- Angular 17 Routing For Beginners | Routing in Angular 17| Angular 17 Routing| Angular 17 Tutorial
https://www.youtube.com/watch?v=lIb_gnleUns
- Angular 17 Nested Routes for Beginners Part 2 | Angular 17 Child Routes for Beginners | Angular 17
https://www.youtube.com/watch?v=pNDwto-XyJ0



## Use tailwindcss
add cdn link in index.html
```html
<script src="https://cdn.tailwindcss.com"></script>
```

Copy template from tailblocks.cc



## Routing
app.routes.ts
```ts
export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', title: 'Page Not Found', component: PageNotFoundComponent }
];
```

navbar.component
```ts
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
```
navbar.component.html
```html
<a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="mr-5 hover:text-white">Home</a>
```
Document: 
https://angular.dev/guide/routing/router-reference#active-router-links
https://angular.dev/guide/routing/router-tutorial#identify-the-active-route


## Page Not Found
```ts
{ path: '**', title: 'Page Not Found', component: PageNotFoundComponent }
```

## Redirect
```ts
{ path: '', redirectTo: '/home', pathMatch: 'full' },
```


## Nested Routes 
```ts
{ path: 'about', title: 'About', component: AboutComponent },
{
  path: 'about', children: [
    { path: 'company', title: 'About | Company', component: CompanyComponent },
    { path: 'employees', title: 'About | Employees', component: EmployeesComponent },
  ]
},
```

Remove [routerLinkActiveOptions]="{exact: true}" from about link
```html
  <a routerLink="/about" routerLinkActive="active"
        ariaCurrentWhenActive="page" class="mr-5 hover:text-white">About</a>
```
