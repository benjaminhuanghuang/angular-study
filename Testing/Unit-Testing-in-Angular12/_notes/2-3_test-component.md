/src/app/heroes/heroes.component.ts

Mock heroService

```
  mockHeroService = jasmine.createSpyObj([
    "getHeros",
    "addHero",
    "deleteHero",
  ]);


  // make the mock method return a observable objectr
  mockHeroService.deleteHero.and.returnValue(of(true));
  ...
  expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROS[2]);
```
