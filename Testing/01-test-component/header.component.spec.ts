import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  /*
    fixture is a wrapper over the HeaderComponent
  */
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    /*
      TestBed creates a dummy module that contains the HeaderComponent class
    */
    await TestBed.configureTestingModule({
      imports: [

      ],
      declarations: [
        HeaderComponent,
      ],
      providers: [

      ],
      schemas: []
    }).compileComponents();
  });

  beforeEach(async () => {
    /*
      fixture is a wrapper over the HeaderComponent
    */
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    /*
      Tell Angular to re-evaluate data binding expressions in the HTML template
    */
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })


  it('Check property', () => {
    expect(component.title).toEqual('Hello World');
  })


  it('Check html', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelect(".content span")?.textContent).toEqual('component is loading');
  })
});