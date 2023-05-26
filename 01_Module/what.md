## What is Module
Modules are ways of bundling Angular building blocks together

Angular modules define all building blocks your app uses: Components, Directives, Services

Every Angular app needs at least one module: AppModule

Angular analyzes NgModules to "understand" your application and its features

Core Angular features are included in Angular modules (e.g. FormsModule) to load them only when needed

```
@NgModule({
  declarations: [
    // declare the component, directive can be used in the templates or routes
    HomeComponent,
    PlaceHolderDirective
  ],
  imports: [
    // import other modules into this module
    // import a module, will add the declarations in that module
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // define all the services
    // Any service you plan to injecting, needs to be provided, and typically to this in AppModule 
    // or add @Injectable({providedIn: 'root'}) on the service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```