# Testing directives

```
<element [appFavoriteIcon]="expression"></element>

<element [appFavoriteIcon]="expression" [color]="'color name'"></element>
```

## Create a TestComponent

The TestComponent has a different <i> element for each test case.

```
@Component({
template: `
  <i [appFavoriteIcon]="true"></i>
  <i [appFavoriteIcon]="false"></i>
  <i [appFavoriteIcon]="true" [color]="'blue'"></i>
  <i [appFavoriteIcon]="true" [color]="'cat'"></i>
`
})
class TestComponent { }
```

## Create some variables that will be used in tests

```
let fixture: ComponentFixture<any>;
const expectedSolidStarList = constants.classes.SOLID_STAR_STYLE_LIST;
const expectedOutlineStarList = constants.classes.OUTLINE_STAR_STYLE_LIST;

beforeEach(() => {
  const testModuleMetadata: TestModuleMetadata = {
      declarations: [FavoriteIconDirective, TestComponent]
    };

  fixture = TestBed.configureTestingModule(testModuleMetadata).createComponent(TestComponent);

  fixture.detectChanges();
});
```

## Emulate click

```
it('should display a black outline of a star after the user clicks on the star', () => {
  const event = new Event('click');
  starElement.dispatchEvent(event);

  expect(starElement.style.color).toBe('black');
  expect(doClassesMatch(starElement.classList, expectedOutlineStarList)).toBeTruthy();
});
```
