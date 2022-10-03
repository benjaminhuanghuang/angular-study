
## Install
```
  npm i @ngrx/store @ngrx/effects @ngrx/entity @ngrx/router-store @ngrx/store-devtools @ngrx/schematics 
```


@ngrx/schematics provide commands to create store, reducer ...
```
  ng config cli.defaultCollection @ngrx/schematics  
```
this command will modify angular.json
```
"cli": {
  "cli.defaultCollection": "@ngrx/schematics"  
}
```

## Create Store
```
  ng g store State --root --module app.module.ts --state-path store --state-interface AppState 
```
this command will create `src/app/store/index.ts` and update `src/app/app.module.ts`


## Create Action
```
  ng g reducer store/actions/counter --skipTests
```

## Create Reducer
```
  ng g reducer store/reducers/counter --skipTests --reducers=../index.ts 
```