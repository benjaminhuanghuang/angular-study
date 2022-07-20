import { TestBed, inject } from "@angular/core/testing";
// to be test
import { PreferencesService } from "./preferences.service";
// stub/interfce of the storage used by PreferencesService
import { BrowserStorage } from "./browser-storage.service";

/*
  Use stub BrowserStorage to create a BrowserStorageMock for testing

  BrowserStorageMock will be used in the unit test as a substitute for the real service.
*/
class BrowserStorageMock {
  getItem = (property: string) => ({ key: "testProp", value: "testValue " });
  setItem = ({ key: key, value: value }) => {};
}

/*

*/
describe("PreferencesService", () => {
  beforeEach(() => {
    /* 
      The TestBed module is configured before every test.
      It tells Angular what modules it needs to load and 
      how they need to be configured for testing this file
    */
    TestBed.configureTestingModule({
      providers: [
        /*
          configure TestBed to use BrowserStorageMock when a service calls 
          for BrowserStorage as a dependency.
        */
        PreferencesService,
        {
          provide: BrowserStorage,
          useClass: BrowserStorageMock,
        },
      ],
    });
  });

  //checks that the service test setup is right.
  it("should create the Preferences Service", inject([PreferencesService], (service: PreferencesService) => {
    expect(service).toBeTruthy();
  }));

  //
  describe("save preferences", () => {
    it("should save a preference", inject(
      [PreferencesService, BrowserStorage],
      (service: PreferencesService, browserStorage: BrowserStorageMock) => {
        // Adds a spy to browserStorage.setItem
        spyOn(browserStorage, "setItem").and.callThrough();

        service.saveProperty({ key: "myProperty", value: "myValue" });

        // Checks the spy to make sure it was called from saveProperty()
        expect(browserStorage.setItem).toHaveBeenCalledWith("myProperty", "myValue");
      }
    ));

    it("saveProperty should require a non-zero length key", inject(
      [PreferencesService],
      (service: PreferencesService) => {
        // Creates a wrapper for any function that’s supposed to throw an error
        const throws = () => service.saveProperty({ key: "", value: "" });

        // Expects the function to throw an error
        expect(throws).toThrowError();
      }
    ));
  });

  describe("get preferences", () => {
    it(`has a 'saveProperty' method`, inject(
      [PreferencesService, BrowserStorage],
      (service: PreferencesService, browserStorage: BrowserStorageMock) => {
        expect(service.getProperty).toBeDefined();
      }
    ));

    it(`returns a ContactPreference`, inject(
      [PreferencesService, BrowserStorage],
      (service: PreferencesService, browserStorage: BrowserStorageMock) => {
        spyOn(browserStorage, "getItem").and.returnValue({ key: "pref", value: "myValue" });

        const prefs = service.getProperty("getItem");
        expect(prefs.key).toEqual("pref");
        expect(prefs.value).toEqual("myValue");
      }
    ));
  });
});
