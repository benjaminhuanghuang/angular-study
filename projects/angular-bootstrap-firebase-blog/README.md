# Angular Application From Scratch - Angular Project Blog App For Your Portfolio
2023
https://www.youtube.com/watch?v=6zv1PTuqIIc

https://www.patreon.com/Octacademy72/shop/angular-complete-blog-app-source-code-42562?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=productshare_creator&utm_content=join_link


## Component structure  
1. Main Pages
   1. Home Component
   2. Single-Category Component
   3. Single-Post Component
   4. Terms & Conditions Component
   5. About Component
   6. Contact Component
2. Common-area
   7. Header Component
   8. Category-Navbar Component
   9. Footer Component
   
3. Separate Components
   10. Subscription-form Component
   11. Comment-Form Component
   12. Comment-List Component

## Preparing
### Create Angular Project
```bash
 ng new ang-blog-app
 router: yes
 style: css
```

### Create Components
```bash
  ng g c layouts/header
  ng g c layouts/category-navbar
  ng g c layouts/footer

  ng g c pages/home
  ng g c pages/single-category
  ng g c pages/single-post
  ng g c pages/terms-conditions
  ng g c pages/contact-us
  ng g c pages/about

  ng g c subscription-form

  ng g c comments/comment-form
  ng g c comments/comment-list
```

### Routing and Navigation
Modify projects\angular-bootstrap-firebase-blog\ang-blog-app\src\app\app-routing.module.ts


### Bootstrap
Install bootstrap
```bash
   npm i bootstrap
```

add bootstrap to angular.json
```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
```

Or add bootstrap to index.html
```html
   <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
```

Or add bootstrap to styles.css
```css   
   @import "~bootstrap/dist/css/bootstrap.min.css";
```

### Create Theme and CSS variables
styles.css
```css
:root {
  --primary-color: #026467;
  --secondary-color: #E5F5EA;
  --body-text-color: #596392;
  --navbar-footer-color: #F9F9F9;
}
```

### Fonts
import and use google fonts in styles.css
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  font-family: 'Roboto',
  sans-serif;
  font-size: 12px;
  color: var(--body-text-color);
}
```

## DESIGN BLOG FRONT VIEW II (Main components)
1. Design Header Component.
2. Design the Category Navbar Component.
3. Design the Footer Component.
4. Design the Post Card Component.
5. Design the Subscription Card Component.

### Category Navbar Component
Navbar css

### Footer
Move definition of .site-logo and .nav-link to styles.css. They are shared by header, category-navbar and footer.


## Post card
```
   ng g c layouts/post-card
```

# Subscription FormComponent


## DESIGN BLOG FRONT VIEW III (PAGES DESIGN)
1. Prepare the App Component.
2. Design the Home Page Component.
3. Design the Single Category Component.
4. Design the Single Page Component.
5. Design the Comment Component.
6. Design the All Other Pages Component.


### Home page
Feature area
