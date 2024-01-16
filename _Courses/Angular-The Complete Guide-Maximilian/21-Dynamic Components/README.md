# Dynamic component
The component is created dynamically at runtime. For example, a overlay, alert.

Create component shared/alert and add it to app.module.ts. Use it in auth/auth.component.ts

Dynamic component 2 approaches:
## ngIf
```html
<app-alert [message]="error" *ngIf="error" (close)="clearError()"></app-alert>
```
## Component created and added to DOM via code and managed by developer
Use the componentFactoryResolver to create a component and add it to the DOM. 

```ts
private showAlert(message: string) {
  const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
  // Tell angular where to add the component

}

```

create a helper directive placeholder.directive.ts to get the viewContainerRef

```html
<ng-template appPlaceHolder></ng-template>
```

## Update
Angular no longer requires component factories to dynamically create components. Use different signature of the createComponent method, which allows passing Component class directly.
