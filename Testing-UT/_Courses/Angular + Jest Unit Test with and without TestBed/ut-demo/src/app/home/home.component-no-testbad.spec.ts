import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  // make a reference to keep translateService mock
  let translateMock: ReturnType<jest.Mock>;
  let component: HomeComponent;

  beforeEach(() => {
    // mock the translate service because we don't want to use the test service class internal methods
    // In a unit test, we are only considering one single class/unit.
    // we don't want to make sure translate service’s functions are working or not
    translateMock = {
      translate: jest.fn(() => {
        return 'translated Words';
      }),
    };

    //(4)
    component = new HomeComponent(translateMock);
  });

  it('should call translatewords and translate words', () => {
    expect(component.translateWords('hello')).toBe('translated Words');
    expect(translateMock.translate).toHaveBeenCalledTimes(1);
  });
});
