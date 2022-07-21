
## Import FormsModule / ReactiveFormsModule
```
// app.module.ts
import {
FormsModule,
ReactiveFormsModule
} from '@angular/forms';


// farther down...
@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    // ... our declarations here
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- add this
    ReactiveFormsModule // <-- and this
  ],
  bootstrap: [ AppComponent ]
})
class AppModule {}
```


FormsModule gives us template driven directives such as:
- ngModel 
- NgForm


ReactiveFormsModule gives us reactive driven directives:
- formControl
- ngFormGroup
