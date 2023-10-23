import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLaceholderComponent } from './placeholder.component';

describe('PLaceholderComponent', () => {
  let component: PLaceholderComponent;
  let fixture: ComponentFixture<PLaceholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PLaceholderComponent]
    });
    fixture = TestBed.createComponent(PLaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
