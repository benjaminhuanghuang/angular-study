A FormControl represents a single input field. It is the smallest unit of an Angular form.

To build up forms we create FormControls (and groups of FormControls) and then attach metadata and logic to them.

```
<input type="text" [formControl]="name" />

```