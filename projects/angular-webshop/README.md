# Build a Webshop | Node.js/TypeScript/Angular/Stripe

## Setup
```
  npm i -g @angular/cli@14.2.1

  ng new store --routing --skip-tests --minimal --style=scss

  ng add @angular/material

  npm i tailwindcss postcss autoprefixer
  npx tailwindcss init
```

import modules in app.module.ts
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

setup tailwindcss in tailwind.config.js
```
  content: ["./src/**/*.{html,ts}"],
```
