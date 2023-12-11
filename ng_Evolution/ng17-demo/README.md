# Ng17Demo

## Use tailwindcss
add cdn link in index.html
```html
<script src="https://cdn.tailwindcss.com"></script>
```

Copy template from tailblocks.cc



## Routing
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

```html
<a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="mr-5 hover:text-white">Home</a>
```
Document: 
https://angular.dev/guide/routing/router-reference#active-router-links
https://angular.dev/guide/routing/router-tutorial#identify-the-active-route
