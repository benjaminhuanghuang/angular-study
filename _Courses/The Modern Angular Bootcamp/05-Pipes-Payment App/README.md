
https://www.bilibili.com/video/BV18K411Q7Fx?p=48&vd_source=b7025abbc1efd8b7631e43fa506ade3a

## Pipes
- Functions that format data for use in a template
- Only used in a template
- Some pipes are built into Angular (angular.io/api?type=pipe)
- We can build our own pipes very easily
- Like many other angular features, you don't have to use pipes, but they are recommended!


## get input
```html
  <input (input)="onChange($event.target.value)">
```


```html

  {{ name | titlecase}}    // Title Case

  {{ date | date:'d d d'}}
  {{ date | date: short}}

  {{ price | currency}}   // browser setting


  {{ miles | convert: 'cm' | number: '1.0-2' }}
```


## Custom Pipe
```ts
@Pipe( {
  name: 'convert'
} )
export class ConvertPipe implements PipeTransform {
transform (value: any, targetUnit: string) : any {
  if (!value)
    return '';
  }
  switch （targetUnit）{
    case 'm':
      return value * 1.60934 * 1000;
    case 'km':
      return value * 1.60934;
    default:
      throw new Error('Target unit not supported');
  }
}
```

```html
  {{ miles | convert:'m' }}
```
