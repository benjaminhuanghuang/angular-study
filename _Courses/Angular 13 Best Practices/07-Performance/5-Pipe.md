# Pure and Impure Pipe Performance

order-by.pipe.ts
```ts
```
```html
<tr *ngFor="let class of visibleClasses | orderBy:orderByField">
```
This is because pipes are pure by default, meaning they don't work with data mutation. They only get reevaluated if the object reference changes that the pipe is being applied to. 

```ts
@Pipe({
  name: 'orderBy',
  pure: false    // impure pipe
})
```
using impure pipes comes at a real performance cost
impure pipes can get updated frequently, and the logic in pipes can be a little expensive.
