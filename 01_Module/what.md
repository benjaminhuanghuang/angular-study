## What is an Angular Module?

Modules are ways of bundling Angular building blocks together

In simple term a module is a logical block or container that holds something.

Angular modules define all building blocks your app uses: Components, Directives, Services

Every Angular app needs at least one module: AppModule
Once you create a new Angular project the Angular team provided you with a ready to use module called app.module.ts. 
```
@NgModule({
  /*
    declarations is an Array of classes, declare the component, directive can be used in the templates or routes
    Holds list of all the custom directives, pipes and components user has created.
    All the items (directive, pipe, component) added in this list are all part of this module.
  */
  declarations: [
    HomeComponent,
    PlaceHolderDirective
  ],
  /*
    imports is a list of all modules that this current module is dependent on.
    import other modules into this module
    import a module, will add the declarations in that module
  */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  /*
    providers contains the list of dependency injection providers
    Any service you plan to injecting, needs to be provided, and typically to this in AppModule 
    or add @Injectable({providedIn: 'root'}) on the service
  */
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
- A module is a simple typescript class.

- The module is decorated with @NgModule decorator.

- The NgModule decorator is a function that takes an object. This object is also called metadata object (you should remember this term)

- The metadata has information/ details which helps Angular how to compile and launch the application.

- Angular analyzes NgModules to "understand" your application and its features

Core Angular features are included in Angular modules (e.g. FormsModule) to load them only when needed
