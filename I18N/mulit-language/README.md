# How Make Multi-Language Angular Websites - Full Guidance On Angular Localization

https://github.com/chrisira/angular_localization-Youtube

## Save the language setting in the local storage

navbar.component.ts
```ts
  this.lang = localStorage.getItem('lang') || 'en';
    
  ChangeLang(lang:any) {
    localStorage.setItem('lang',selectedLanguage);
  }
```


## Use the ngx-translate library to translate the text

```bash 
  npm install @ngx-translate/core @ngx-translate/http-loader --save
```
