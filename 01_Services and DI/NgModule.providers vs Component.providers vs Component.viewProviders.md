# Angular / Dependency Injection & Providers /Providers and viewProviders


https://codecraft.tv/courses/angular/dependency-injection-and-providers/ngmodule-providers-vs-component-providers-vs-component-viewproviders/

https://www.youtube.com/watch?v=XpfxmHM6E4E


Difference between configuring a provider on an NgModule, component or directives providers property and a components view Providers property.


## Provides in NgModule

Share one instance of a service across the entirety of the application.


## Provides in Component
One work with the component and its children.

Separate state per component and it's children.


## ViewProviders in Component
The component creates an injector which is only used by the current component and view children of the current component.

Separate state per component and it's view children.

```html
  <ng-content></ng-content>


  <parent>
    <child>This is content children</child>
  </parent>
```
