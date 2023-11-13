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

### Admin CRUD I (categories)
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


### Delete category


## Admin CRUD I (post)
1. How to save new post to the cloud firestore?
2. How to upload post images to the Cloud Storage?
3. How to load the post with the post images?
4. How to setup an HTMl table with post image Preview
5. How to update an existing post?
6. How to do the delete operation?


Create components
```
ng g c posts/all-post  
ng g c posts/new-post  
```

Add routing
```ts
  { path: 'posts', component: AllPostComponent },
  { path: 'posts/new', component: NewPostComponent },
```

Add link in dashboard.component.html



### Image preview


### Load category in new post


### Editor
```
   npm i @kolkov/angular-editor
```
import module
```
import { AngularEditorModule } from '@kolkov/angular-editor';
```

### Use reactive form
```
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
```

Use fromGroup and formControlName in template
```html
<form [formGroup]="postForm  ">
   <input type="text" class="form-control" (keyup)="onTitleChanged($event)" formControlName="title">
```

### Form validation
```html
<input type="text" class="form-control" (keyup)="onTitleChanged($event)" formControlName="title"
   [ngClass]="{'is-invalid': fc.title.invalid && fc.title.touched}">
<div *ngIf="fc.title.errors?.['required']">
   <div class="alert alert-danger" *ngIf="fc.title.invalid && fc.title.touched"> Title is required. </div>
</div>
<div *ngIf="fc.title.errors?.['minlength']">
   <div class="alert alert-danger" *ngIf="fc.title.invalid && fc.title.touched"> Title must be at least 10 characters. </div>
</div>
```
Disable the submit button
```html
  <button class="btn btn-info btn-theme" [disabled]="postForm.invalid"> Save Post </button>
```


### Submit and save
```
   ng g interface models/post  
   ng g s services/posts
```
Upload image
Start the Firebase storage, change the Rules to allow read and write

```ts
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

uploadImage(selectedImage: any) {
   const filePath = `postIMG/${Date.now()}`;
   this.storage.upload(filePath, selectedImage).then(() => { });
}
```

### Edit post
Pass id as query parameter
```html
  <button class="btn btn-sm btn-warning" routerLink='/posts/new' [queryParams]="{id: post.id}"> Edit </button>
```
Read query parameter
```ts
constructor(
   private route: ActivatedRoute) {
   this.route.queryParams.subscribe(params => {
      his.postService.loadOneData(params['id']).subscribe(post => {});
   });
}

```


### Mark feature


## Auth
1. How to design the Login Component?
2. How to do the Login Queries and Logics?
3. Firebase Authentication & How to use it?
4. Angular Router Guard


### Create login component
```bash
ng g c auth/login
```
Add routing
```ts
  { path: 'login', component: LoginComponent },
```

Template driving form
```html
<form #loginForm=ngForm (ngSubmit)="onSubmit(loginForm)">

   <div class="form-group">
      <input type="email" class="form-control" placeholder="Email" name="email" #Email='ngModel' ngModel
         required email [ngClass]="{'is-invalid': Email. touched && Email. invalid }">
      <div class="alert alert-danger" *ngIf="Email.touched && Email.invalid">
         <div *ngIf = "Email.errors?.['required']"> Email Cannot be Empty </div>
         <div *ngIf = "Email.errors?.['email']"> Please Enter a Valid Email Address </div>
      </div>
   </div>
```

### Firebase Authentication
Authentication -> Sign-in method -> Email/Password -> Enable

settings -> Authorized domains -> add localhost

import module
```ts
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
```

Create service
```bash  
ng g s services/auth
```

### Add login info to header
```html
<div class="container justify-content-center" *ngIf="isLoggedIn$ | async">
   <a href="#" class="mr-3">{{userEmail}}</a>
   <button class="btn btn-sm btn-info bg-secondary-theme text-theme-primary" (click)="onLogout()">Logout</button>
</div>
```

### Router guard
Create guard
```bash
   ng g guard services/auth
   CanActivate
```
```ts
import { AngularFireAuth } from '@angular/fire/compat/auth';
```


Add guard to router
```ts
  { path: '', component: DashboardComponent, canActivate: [authGuard] },
```


## Dynamic Blog Front View(render data from firestore)
1. Will make the featured post section dynamic
2. Firestore Filtering Methods, (WHERE, LIMIT, ORDERBY)
3. Will make the latest post section dynamic
4. Will make the single post category page dynamic
5. Will make the single post component dynamic


### Load  categories
Create service
```bash
ng g s services/categories
ng g s services/posts
```
CategoryNavbarComponent
```html
<ul class="navbar-nav" *ngFor= "let category of categoryArray">
   <li class="nav-item ml-3"><a href="" class="nav-link"> {{ category.data.category }}</a></li>
</ul>
```

HomeComponent
```html
<div class="col-lg-3" *ngFor="let featuredPost of featuredPostsArray">
    <app-post-card [postData]="featuredPost"></app-post-card>
</div>
```

PostCardComponent


## Subscription
1. Will make Sub Form to Angular Template Driven
2. Will Add Form Validations
3. Will Store the Subscribers in the firestore
4. Will load all the subscribed users inside of our Admin Dashboard

```
   ng g i models/sub
   ng g s services/subscribers
```


### list subscribers in admin dashboard
```
   ng g c subscribers
   ng g s services/subscribers
```   
Add routing
```ts
  { path: 'subscribers', component: SubscribersComponent },
```


## Build & Deploy
```
   ng build --prod
```

Firebase hosting
```
   npm install -g firebase-tools
   

   cd ang-blog-app/dist

   firebase login

   firebase init

   firebase deploy
```
