
Have input and output based on signals with version 17.1.

```ts
export class UserComponent {
  user = input<User>();
}


export class UserComponent {
  user = input.required<User>();
}
```

The code above is equivalent to the code below:

```ts
export class UserComponent {
  @Input() user: User | undefined;
}
```
