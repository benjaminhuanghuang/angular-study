
Well-designed applications have most of the application logic and I/O inside a service. Any
code creating UI elements or handling user input should be in a component


They’re singletons—you create them once and can use them anywhere in the application.

Angular offers many built-in services, including Http-
Client and FormBuilder

## Create Service
```
  ng g service services/<service-name>
```
