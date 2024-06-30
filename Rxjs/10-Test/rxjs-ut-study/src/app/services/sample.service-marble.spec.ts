import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
//
import { SampleService } from './sample.service';

describe('SampleService marble tests', () => {

  let scheduler: TestScheduler;
  let service: SampleService;

  beforeEach(() => {
    service = TestBed.inject(SampleService);
    // tells TestScheduler how to compare values
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should return values in the right order', () => {

    scheduler.run(({ expectObservable }) => {
      const expectedMarble = '(abc|)';
      const expectedValues = {
        a: 'Hello',
        b: 'Packt',
        c: 'Readers'
      };

      expectObservable(service.getValues()).toBe(
        expectedMarble, expectedValues)
    });
  });

  it('should return values in the right time', () => {

    scheduler.run(({ expectObservable }) => {
      const expectedMarble = '(abc) 4995ms (abc) 4995ms(abc |)';
      const expectedValues = {
        a: 'Hello',
        b: 'Packt',
        c: 'Readers'
      };

      expectObservable(service.getRecurrentValues()).toBe(
        expectedMarble, expectedValues)
    });
  });
});
