# Structuring Components

- container and presentation components
- input & output
- Change detection strategies
- ngOnChages: reference vs value
- Cloning
- Component inheritance

## container and presentation components

container : management state, interact with service

presentation: render state in UI

## Change detection strategies

Use OnPush on presentation components can

- performance benefit

可以跳过某个组件或者某个父组件以及它下面所有子组件的变化

禁止 child component 在 ngOnInit 之外修改属性

```
  @Component({
    changeDetection: ChangeDetectionStrategy.OnPush
  })
```

OnPush cause change detection to run when:

1. An input property reference changes
2. An output property/EventEmitter or DOM event fires
3. Async pipe receives an event
4. Change detection is manually invoked via ChangeDetectorRef

## Cloning

- JSON.parse(JSON.stringify(this.customers))

- this.cloneService.deepClone(this.customers)

- immutable.jS
