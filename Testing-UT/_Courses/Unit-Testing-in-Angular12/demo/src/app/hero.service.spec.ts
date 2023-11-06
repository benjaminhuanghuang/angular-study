import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
//
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";

//
describe("HeroService", () => {
  let mockMessageService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(["add"]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        { provide: MessageService, useValue: mockMessageService },
      ],
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });
  describe("getHero", () => {
    it("should call get with correct URL", inject(
      [HeroService],
      (service: HeroService, controller: HttpTestingController) => {
        service.getHero(4).subscribe(() => {});
        //
        const req = httpTestingController.expectOne("api/heroes/4");
        req.flush({ id: 4, name: "nam1", strength: 40 }); // set the reponse
        httpTestingController.verify();
      }
    ));
  });
});
