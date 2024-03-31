# Intro - Build a Personal Dashboard App w/ Angular

https://www.youtube.com/watch?v=VBIUe9KaCFc&list=PLIjdNHWULhPR2Tp3fA6Yg8_OY7bG35S5q&index=1

https://github.com/Devstackr/angular-personal-dashboard

## Part 1 create project and setup layout

Create project

```bash
ng new angular-personal-dashboard --style=scss --routing --skip-tests
```

Create layout: top-section, content-section, bottom-section

Use the minireset.css library to reset the default browser styles
Remove the scroll bar by setting margin and padding to 0

```scss
@import url("https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css");

```

Use google fonts Inter


## Part 2 create tab

```bash
ng g c tabs
```

```html
<div class="tabs">
    <div class="tab">
      <div class="tab-title">
          <i class="material-icons-outlined">bookmarks</i>
      </div>
    </div>
</div>
```

Use the Material icon

```scss
@import url('https://fonts.googleapis.com/css?family=Material+Icons+Outlined|Material+Icons');
```

Set background image using https://source.unsplash.com/random/1920x1080

Setup routing

## Part 3 Bookmarks

BookmarkTile

## Part 4 Todo items


## Part 5 Notes


## Part 6 Route transition

```html
<div class="content-section" [@routeAnim]="prepareRoute(outlet)">
    <router-outlet  #outlet="outlet"></router-outlet>
</div>
```

## Part 7 Add note


## Part 8 Note service

```bash
ng g s shard/note
```

## Part 9 Note card


## Part 9 Note form in AddNoteComponent


## Part 10 Note form

## Part 11 Form validation in AddNoteComponent

## Part 12 Edit note

```bash
ng g c edit-note
```
