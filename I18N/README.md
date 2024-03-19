# Angular Internationalization

Internationalization (I18N) is the process of designing the application to support its use in different languages and regions.

- Separating the content for translation
- text direction

Localization is the process of building versions of the application for different languages and regions.

- measurement units, time, currency, and number formats

## Development Process

### Install dependencies

```bash
  npm install @angular/localize
  or
  ng add @angular/localize
```

### Specify with locale will be supported

In angular.json, under projects > app name, add the i18n section.
Define the local es will be supported and the path of the translation file will be stored.

```json
 "i18n": {
    "sourceLocale": "en-US",
    "locales": {
      "<id>": "src/locale/messages.<id>.json"
    }
 }
```

Under architect > build > options, add the localize property and set it to true.
Tell Angular which locales to build when localize the application.
 
```json
 "build": {
  "options": {
    "localize": ["ja-JP"]
  }
 }
```

### Mark the text need to be translated

```html
  <h1 i18n>Welcome to Angular</h1>

  <td> {{ '05/01/2022' | date }}</td>

  <td> {{ 129 | currency }}</td>

  <img alt="hello" i18n-alt src="">
  
```

## Extract the marked text for translation

```bash
  ## Default format for translation files is XLF2
  ng extract-i18n --output-path src/locale 
  
  ng extract-i18n --output-path src/locale --format json
```

Then, copy the src/locale/messages.xlf to src/locale/messages.ja.xlf

## Manually translate the text in src/locale/messages.ja.json

Add a target element under the trans-unit.
```xml


```

## Build a localized version of the application

```bash
  ng build --configuration ja-JP

  ## Build all localized versions
  ng build --localize
```

- Internationalize the application
- Localize the application

The localization process includes the following actions.

- Extract text for translation into different languages
- Format data for a specific locale


A locale determines the formatting and parsing of the following details.

Measurement units including date and time, numbers, and currencies
Translated names including time zones, languages, and countries
