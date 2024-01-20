```ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, ContactComponent, AboutComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng17-demo';
}
```
