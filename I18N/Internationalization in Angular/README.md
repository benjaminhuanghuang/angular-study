# Internationalization in Angular

by Alisa Duncan, 2024-1

https://app.pluralsight.com/library/courses/angular-internationalization/table-of-contents

https://github.com/alisaduncan/angular-i18n


## Localize library project setup

en-US : Language - region/local

Install Localize library

```bash
ng add @angular/localize
```

Add configuration to the extra-config section in angular.json to define the output path
That generate message, updates the build, add add i18n section for the project. 

```json
 "extract-i18n": {
    "builder": "@angular-devkit/build-angular:extract-i18n",
    "options": {
      "buildTarget": "angular-i18n:build",
      "outputPath": "src/locale"
    }
  }
```


```json
Add i18n section in angular.json

```json
 "i18n": {
    "sourceLocale": "en-US",
    "locales": {
      "<id>": "src/locale/messages.<id>.json"
    }
 }
```

Add build config in angular.json
```json
 "build": {
  "options": {
              "localize": true,
    }
   "development": {
          "localize": false,
        }, 
  "configurations": {
       "<id>": {
              "localize": ["<id>"]
            }
  }
 }
```

Create Translation Files
The default format for translation files is XLF2, which is an XML-based format.
```bash
  ng extract-i18n --format json
```

Add serve configuration in angular.json
```json
 "serve": {
  ...
  "configurations": {
    "<id>": {
      "browserTarget": "angular-i18n:build:development, <id>"
    }
  }
}
```

```bash
  ng serve --configuration <id>
```
