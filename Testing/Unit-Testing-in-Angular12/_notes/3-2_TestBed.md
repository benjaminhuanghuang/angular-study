/src/app/hero/hero.component.ts

## TestBed

## NativeElement vs DebugElement

```
  expect(fixture.nativeElement.querySelector("a").textContent).toContain("name2");

  expect(fixture.debugElement.query(By.css("a")).nativeElement.textContent).toContain("name2");
```
