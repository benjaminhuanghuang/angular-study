## Angular Form tools.
- FormControls encapsulate the inputs in our forms and give us objects to work with them

- Validators give us the ability to validate inputs, any way we’d like

- Observers let us watch our form for changes and respond accordingly




## Template
```
<form #f="ngForm" (ngSubmit)="onSubmit(f.value)"
```
#v="thing" syntax says that we want to create a local variable f for this view.


