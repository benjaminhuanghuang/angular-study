By using @HostBinding() the host element (the app-article tag) we want to set the
class attribute to have “row”.

```
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
}
```