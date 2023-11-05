# Build a Webshop | Node.js/TypeScript/Angular/Stripe
https://www.youtube.com/watch?v=Kbauf9IgsC4

https://github.com/bobangajicsm/E-Commerce-Store


## Setup
```
  npm i -g @angular/cli@14.2.1

  ng new store --routing --skip-tests --minimal --style=scss
```

### Use angular material
```
  ng add @angular/material
```

import angular material modules in app.module.ts
```
  MatGridListModule,
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatExpansionModule,
  MatListModule,
  MatToolbarModule,
  MatTableModule,
  MatBadgeModule,
  MatSnackBarModule,
```

### Use tailwaind
```

  npm i tailwindcss postcss autoprefixer
  npx tailwindcss init
```

setup tailwindcss in tailwind.config.js
Tell Tailwind what are the template to style
```
  content: ["./src/**/*.{html,ts}"],
```

Import tailwindcss in styles.scss
```
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  @import "tailwindcss/utilities";
```

## Create header component
ng g c header

use it in app.component.html
```
  <app-header></app-header>
```

## Crate pages
```
cd pages
ng g c home
ng g c cart
```

## Add routing 
app-routing.module.ts
```
  const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cart', component: CartComponent },
  ];
```
