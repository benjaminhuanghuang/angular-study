import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { TranslateService } from '../services/translate.service';

describe('HomeComponent', () => {
  let translateMock: ReturnType<jest.Mock>;

  let component: HomeComponent;
  //fixture is a wrapper for component and its template
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    translateMock = {
      translate: jest.fn(() => {
        return 'translated Words';
      }),
    };

    /*
    here we are configuring the testing module, this method actually accepts a configuration object.
    In there it is requiring imports, providers, and declaration like an angular module class do,
    in this example we are only providing the providers
    */
    await TestBed.configureTestingModule({
      /*
         we don't want to give an exact a TranslateService instance to it because in this test suite,
         our intention is to test the Home component. So we are giving the mocked one as a useValue.
      */
      providers: [
        {
          provide: TranslateService,
          useValue: translateMock,
        },
      ],
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
      });;

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call translatewords and translate words', () => {
    expect(component.translateWords('hello')).toBe('translated Words');
    expect(translateMock.translate).toHaveBeenCalledTimes(1);
  });
});
