Each pipe in Angular has a method named transform(). This method is responsible for formatting the pipe’s input.

```
import { PhoneNumberPipe } from './phone-number.pipe';

describe('PhoneNumberPipe Tests', () => {
  let phoneNumber: PhoneNumberPipe = null;

  beforeEach(() => {
    phoneNumber = new PhoneNumberPipe();
  });

  describe('default behavior', () => {
    it('should transform the string or number into the default phone format', () => {
      const testInputPhoneNumber = '7035550123';
      const transformedPhoneNumber =
      phoneNumber.transform(testInputPhoneNumber);
      const expectedResult = '(703) 555-0123';
      expect(transformedPhoneNumber).toBe(expectedResult);
    });

    it('should not display anything if the length is not 10 digits', () => {
      const testInputPhoneNumber = '703555012';
      const transformedPhoneNumber =
      phoneNumber.transform(testInputPhoneNumber);
      const expectedResult = '';
      expect(transformedPhoneNumber).toBe(expectedResult);
    });
  });

  describe('phone number format tests', () => { #A
    it('should format the phone number using the dots format', () => {
      const testInputPhoneNumber = '7035550123';
      const format = 'dots';
      const transformedPhoneNumber =
      phoneNumber.transform(testInputPhoneNumber, format);
      const expectedResult = '703.555.0123';
      expect(transformedPhoneNumber).toBe(expectedResult);
    });

    it('should not add anything if the country code is unrecognized', () => {
      const testInputPhoneNumber = '7035550123';
      const format = 'default';
      const countryCode = 'zz';
      const transformedPhoneNumber =
      phoneNumber.transform(testInputPhoneNumber, format, countryCode);
      const expectedResult = '(703) 555-0123';
      expect(transformedPhoneNumber).toBe(expectedResult);
    });
  });

  afterEach(() => {
    phoneNumber = null;
  });
});

```
