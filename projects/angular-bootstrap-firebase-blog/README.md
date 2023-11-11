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



## Admin dashboard
1. Generate a Separate Angular app for the Dashboard
2. Planning the Components
3. Designing the layout using Bootstrap
4. What is Firebase & Firestore?
5. NoSql vs Sql Database
6. Connect to firebase


Create a new angular project
```bash
ng new ang-blog-dashboard
```

Main Components for the Backend Dashboard
1. Login Component.
2. Category Component.
3. Post Component.
4. Subscription Component.
5. Comments Component
6. Dashboard Component.
7. Header component.
8. Footer component.

```bash
ng g c layouts/header
ng g c layouts/footer

ng g c dashboard


```

Use fontawesome icon library
```
fontawesome.com/v5.15/how-to-use/customizing-wordpress/snippets/setup-cdn-webfont


<Link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
```


## Firebase
1. Real-Time Database.
2. Cloud Functions.
3. Analytic Tools.
4. Testing Tools.
5. Push Notifications
6. Authentications.
7. Cloud Hosting
8. Scaling Tools.

### Firebase Setup
Create a google account
Create a project in firebase console (I reused an existing project called ben-firebase-study)
Create an app named 'ang-blog-app' because need some credentials
Copy the credentials to environment.prod.ts
```typescript
export const environment = {
  production: true,
  firebaseConfig: {
   ....
  }
}
```

Install library
```bash
   ng add @angular/fire
```

Import module
```ts
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


imports: [
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFirestoreModule
],
```

### Admin CRUD I
```
   ng g c categories
```

Add routing
```ts
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'categories', component: CategoriesComponent }
];
```
Add Link
```html
<div class="card shadow-effect" routerLink="/categories">
```


### Create firebase database
add rules for the database
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}
```

### Save data into firebase
```ts
import { AngularFirestore } from '@angular/fire/compat/firestore';

constructor(private afs: AngularFirestore) { }

onSubmit(formData: any) {
   const categoryData = {
      category: formData.value.category
   }

   this.afs.collection('categories').add(categoryData).then(docRef => {
      console.log('Document written', docRef);
      this.asf.collection('categories').doc(docRef.id).collection('posts').add(subData).then(docRef => {
         console.log('Document written', docRef);
      })
   })
   .catch(err => {
      console.error('Error adding document: ', err);
   });

}
```


### Create service
```
ng g s services/categories
ng g i models/category
```


### Toaster message
```
   npm i ngx-toastr
   npm i @angular/animations
```

import css in styles.css
```css
@import "~ngx-toastr/toastr";
```

import module in app.module.ts
```ts
import { ToastrModule } from 'ngx-toastr';
```

use ToastrService in service
```ts
import { ToastrService } from 'ngx-toastr';
```


## Load categories
Add function into service
```ts
 loadData() {
    return this.afs.collection('categories').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }
```

Bind data template

### Update category
Add 'Edit' action 
