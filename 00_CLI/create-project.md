Creating a New Angular App
```
ng new \
    --directory <your-folder-name> \
    --routing \
    --skip-git \
    --skip-tests \
    --standalone \
    --strict \
    --style scss \
    <your-project-name>
``````

```
  ng new <project>
```

Define the prefix of the selector
```
  ng new ngAuction --prefix nga --routing

  --prefix nga: In angular.json, nga- prefix to all selectors 
  --routing   : generate a boilerplate module for routing support
```

```
  ng new <app>  --style=scss --routing
```

--dry-run stop the CLI from making any changes to the file system
```
  ng new <app> --dry-run 
```

--dry-run stop the CLI from making any changes to the file system
```
  ng new <app> --no-strict
```

The strict mode
- Strict mode in TypeScript, as well as other strictness flags recommended by the TypeScript team. 
- Specifically, strict, forceConsistentCasingInFileNames, noImplicitReturns, noFallthroughCasesInSwitch
- Turns on strict Angular compiler flags strictTemplates and strictInjectionParameters
- Reduced bundle size budgets by ~75%
- Turns on no-any TSLint rule to prevent declarations of type any
- Marks your application as side-effect free to enable more advanced tree-shaking
