```
  <div *appShowContacts="contacts.length"></div>
```

## Create test component

```
@Component({ template:
  `<div *appShowContacts="true">
  <p>This is shown</p>
  </div>
  <div *appShowContacts="false">
  <p>This is hidden</p>
  </div>
  `
})
class TestComponent { }
```

## Create test suit

```
describe('Directive: ShowContactsDirective', () => {
  let fixture: ComponentFixture<any>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
    declarations: [ShowContactsDirective, TestComponent]
    }).createComponent(TestComponent);
    fixture.detectChanges();
  });

  afterEach(() => { fixture = null; });
});
```

## Test show/hidden

```
it('should be displayed when the input evaluates to true.', () => {
  const element = getElement(fixture);
  expect(element.innerText).toContain('This is shown');
});

it('should be hidden when the input evaluates to false.', () => {
  const element = getElement(fixture);
  expect(element.innerText).not.toContain('This is hidden');
});
```
