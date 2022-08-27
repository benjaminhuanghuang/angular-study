\src\app\hero\hero.component.ts

src\app\hero\hero.component.spec.ts

## TestBed
```
let fixture: ComponentFixture<HeroComponent>; // wrapper for component

```

## NO_ERROR_SCHEMA
Tells Angular don't try to validate the schema.

```
  beforeEach(() => {
    TestBed.configureTestingModule({ 
      declarations: [HeroComponent],
      schemas: [NO_ERROR_SCHEMA]  
    });

    fixture = TestBed.createComponent(HeroComponent);
  });
```

## NativeElement vs DebugElement

```
  expect(fixture.nativeElement.querySelector("a").textContent).toContain("name2");

  expect(fixture.debugElement.query(By.css("a")).nativeElement.textContent).toContain("name2");
```
