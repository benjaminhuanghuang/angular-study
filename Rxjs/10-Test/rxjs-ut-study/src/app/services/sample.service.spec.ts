import { TestBed } from '@angular/core/testing';

import { SampleService } from './sample.service';

describe('SampleService', () => {
  let service: SampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true as a value', () => {

    service.getValue(true).subscribe(

      result => expect(result).toEqual(true))

  });

  xit('should return true as a value', (done) => {
    service.getValue(true).subscribe(
      result => expect(result).toEqual(false)
    );
    done();
  });

  it('should return values in the right order', (done) => {

    const expectedValues = ['Hello', 'Packt', 'Readers'];
    let index = 0;
    service.getValues().subscribe(result => {
      expect(result).toBe(expectedValues[index]);
      index++;
    });

    done();
  });
});
