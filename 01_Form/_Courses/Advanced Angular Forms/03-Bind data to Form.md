## ngModel
The ngModel directive is used to bind the value of a form element to a property of a component.
It is used in template-driven forms to create a two-way data binding between the form element and the component.
```html

  <form class="form" [ngFormOptions]="{ updateOn: 'blur' }">


  <input [(ngModel)]="userInfo.firstName"  type="text" id="name" placeholder=""
    [ngModelOptions]="{name:'first-name', updateOn:'submit', standalone:'true'}" required>
  >
```
standalone: true - The form control is not part of any parent form. Used for helper field we don't need the value in it.
For example, a search input.
When you use ngModel out of a form, standalone is true by default.
