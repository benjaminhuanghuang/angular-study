/src/Modern/Shared/FormulaBar/injection-tokens.ts
```
export const IntellisenseModelServiceInjectionToken = new InjectionToken<IIntellisenseModelService>('IntellisenseModelService');
```



src\Modern\Shared\FormulaBar\dataModel\formula-bar.model.behavior.service.ts
```
export const FormulaBarModelBehaviorServiceProvider: Provider = {
    provide: BehaviorServiceInjectionToken,
    useClass: FormulaBarModelBehaviorService,
};     
```
