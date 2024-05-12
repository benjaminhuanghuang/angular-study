# Reactive Forms

Reactive forms in Angular are used to `manage the state of form inputs` in a reactive way.
They are built around `observable streams` which represent the value and validation state of form controls. 
Reactive forms offer more flexibility and scalability compared to template-driven forms, especially in complex scenarios.

Key concepts in Reactive Forms:

- FormGroup: Represents a group of form controls. It aggregates the values of each control into a single object.
- FormControl: Represents a single input field — a form control instance manages the value, validation status, and user interactions of an input field.
- FormBuilder: A service that provides convenient methods for creating instances of FormGroup and FormControl.
- Validators: Functions used for synchronous and asynchronous validation of form controls.
