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


## Create Angular Project
```bash
 ng new ang-blog-app
 router: yes
 style: css
```

## Create Components
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
