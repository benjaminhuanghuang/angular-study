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

## Translate the application
- Identify the text that needs to be translated

- Add i18n attribute to the HTML element
```html
  <li><a routerLink="/" i18n>Shop</a></li>
```

- Add i18n attribute to the HTML element attributes

```html
<img src="assets/img/logo.png" alt="Bethany's Pie Shop Logo" i18n-alt/>

<input type="text" name="discount-code" id="discount-code" placeholder="Discount code or gift card" i18n-placeholder/>
<input type="submit" name="submit" id="submit" value="Checkout" i18n-value/>
```

extract the translation files

```bash
  ng extract-i18n --format json
```

Run application with different locale

```bash
  ng serve --configuration <id>
```


## Translating applications

- Mark all presentation messages for translation, including accessibility attributes
- Take care in forming messages with implied grammar construct
- Prefer translations in templates, but not at the expense of creating complications
- Provide meaning, description, and custom ids to your translators for accuracy and maintainability
