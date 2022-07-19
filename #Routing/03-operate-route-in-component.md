Angular inject the instance of Router into the router variable.

```
@Component({
  selector: 'app',
  template: `
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/product']">Product Details</a>
    <button (click)="navigateToProductDetail()>Product Details
     </button>
    <router-outlet></router-outlet>
  `
})
class AppComponent {

    constructor(private _router: Router){}

    navigateToProductDetail(){
        this._router.navigate(["/product"]);
     }
}

```
