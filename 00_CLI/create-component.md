# Create components

## Create Angular 17 standalone component

```bash
  ng g c <name> --standalone
```

## Create component in single file

```bash
   ng generate component <component-name> --inlineTemplate=true --inlineStyle=true --skip-tests=true
```

You can also edit schematics object in your angular.json to set these flags to default when generating a component if you wanted to take this further.

```json

"schematics": {
    "@schematics/angular": {
      "component": {
        "inlineTemplate": true
      }
    }
  }
```

## ng generate component

```
  ng g c <name>
```

## without test

```bash
  ng g c <name> --skipTests true
```

## under folder

```bash
  ng g c <path>/<name> --skipTests true
```

## in module

```bash
ng g c /first/components/first --module first
```
