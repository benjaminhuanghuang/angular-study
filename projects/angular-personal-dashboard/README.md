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
