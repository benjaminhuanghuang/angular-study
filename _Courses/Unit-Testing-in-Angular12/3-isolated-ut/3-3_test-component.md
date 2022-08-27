src\app\heroes\heroes.component.ts

src\app\heroes\heroes.component.spec.ts

## Mock heroService

```
  mockHeroService = jasmine.createSpyObj([
    "getHeros",
    "addHero",
    "deleteHero",
  ]);


  \\ make the mock method return a observable object
  mockHeroService.deleteHero.and.returnValue(of(true));
  ...
  expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROS[2]);
```
