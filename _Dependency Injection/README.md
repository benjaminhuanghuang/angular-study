## Injector
Injectors are data structures that store instructions detailing where and how services form. They act as intermediaries within the Angular DI system.



## provider factory function
In order for Angular to know how to create a dependency such as for example the CoursesService instance injected in the CourseCardComponent constructor, 
it needs what is known as a provider factory function.

A provider factory function is simply a plain function that Angular can call in order to create a dependency

That provider factory function can even be created implicitly by Angular using some simple conventions.
```
function coursesServiceProviderFactory(http:HttpClient): CoursesService {
  return new CoursesService(http);
}
```

In order to uniquely identify a category of dependencies, we can define what is known as an Angular injection token.

## Injection token
```
export const COURSES_SERVICE_TOKEN = new InjectionToken<CoursesService>("COURSES_SERVICE_TOKEN");
```
Token object can be used to uniquely identify a set of dependencies.


## Provider
Now that we have both the provider factory function and the injection token, we can configure a provider in the Angular dependency injection system, that will know how to create instances of CoursesService if needed.

The provider itself is simply a `configuration object`, that we pass on to the providers array of a module or component:
```
@NgModule({
  imports: [ ],
  declarations: [ ],
  providers: [
      {
        provide: COURSES_SERVICE_TOKEN,
        useFactory: coursesServiceProviderFactory,
        deps: [HttpClient]
    }
  ]
})
export class CoursesModule { }
```
useFactory: this should contain a reference to the provider factory function, that Angular will call when needed to create dependencies and inject them

provide: this contains the injection token linked to this type of dependency. The injection token will help Angular determine `when` a given provider factory function should be called or not

deps: this array contains any dependencies that the useFactory function needs in order to run, in this case the HTTP client


Consuming the dependency
```
@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent  {
    constructor( @Inject(COURSES_SERVICE_TOKEN) private coursesService: CoursesService) {
    }
}
```
@Inject decorator tells Angular that in order to create this dependency, it needs to use the specific provider linked to the COURSES_SERVICE_TOKEN injection token.