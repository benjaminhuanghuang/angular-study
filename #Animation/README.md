
```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          backgroundColor: 'red',
          transform: 'translateX(0)'
        })
      ),
      state(
        'highlighted',
        style({
          backgroundColor: 'blue',
          transform: 'translateX(100px)'
        })
      ),
      transition('normal <=> highlighted', animate(300))
      // transition('highlighted => normal', animate(600))
    ]),
  ]
})
```