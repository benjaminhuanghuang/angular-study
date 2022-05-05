
```
  ng new <project>
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