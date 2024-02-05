# Diving into the New Angular Control Flow Internals

https://angularindepth.com/posts/1525/diving-into-the-new-angular-control-flow-internals

In v17 Angular introduced a new control flow. In this article we will explore how it works and how it is different from the old one.

In Angular control flow is used to control the execution of the template

## Old control flow

In the old control flow, Angular used structural directives to control the execution of the template. 
Structural directives are directives that change the structure of the DOM. For example, *ngIf, *ngFor is a structural directive.


## Performance

The new control flow is faster than the old one.
The main reason for this is that the new control flow uses internal API-s to create or destroy views. But also, because Angular doesn't have to set the property value, and then check if the value has changed. Instead, Angular directly creates or destroys the view based on the condition, skipping a few steps.

## Migration

```bash
ng g @angular/core:control-flow
...
It will migrate your application code to use the new control flow instead of the old one.
