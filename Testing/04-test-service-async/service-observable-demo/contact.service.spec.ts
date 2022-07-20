import { TestBed } from "@angular/core/testing";
// HttpClientTestingModule create stubs or configure Angular for testing
// HttpTestingController lets you interact with its testing module to
// verify that calls are being attempted and to supply canned responses.
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ContactService } from "./contact.service";

describe("ContactsService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      // Configures the TestBed to use HttpClientTestingModule
      imports: [HttpClientTestingModule],
      providers: [ContactService],
    });
  });

  describe("getContacts", () => {
    let contactService: ContactService;
    let httpTestingController: HttpTestingController;
    let mockContact: any;

    beforeEach(() => {
      contactService = TestBed.get(ContactService);
      /* 
        Assigns a reference to the HttpTestingController for interacting 
        with the HttpClientTestingModule
      */
      httpTestingController = TestBed.get(HttpTestingController);
      mockContact = { id: 100, name: "Erin Dee", email: "edee@example.com" };
    });

    it("should GET a list of contacts", () => {
      /*
        getContacts() returns an observable of contacts
      */
      contactService.getContacts().subscribe((contacts) => {
        expect(contacts[0]).toEqual(mockContact);
      });

      const request = httpTestingController.expectOne("app/contacts");

      // Causes the httpTestingController to emit the value being flushed
      request.flush([mockContact]);

      // Verifies there are no outstanding requests
      httpTestingController.verify();
    });
  });
});
