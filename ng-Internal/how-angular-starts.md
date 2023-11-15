main.ts load AppModule
```
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```



app.module.ts
Tell angular the component should be used when bootstrap
```
@NgModule({

  bootstrap: [AppComponent]
})
```

app.component.ts
```
```