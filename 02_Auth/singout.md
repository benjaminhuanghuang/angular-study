
```ts
import { Router } from '@angular/router';
//
import { AuthService } from '../auth.service';

export class SignoutComponent {
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.signout().subscribe(() => {
      // Navigate the user back to the signin page
      this.router.navigateByUrl('/');
    });
  }
}
```
