import { HeroesComponent } from "./heroes.component";
import { of } from "Rxjs";

describe("HerosComponent", () => {
  let component: HeroesComponent;
  let HEROS;
  let mockHeroService;

  beforeEach(() => {
    HEROS = [
      { id: 1, name: "name1", strength: 8 },
      { id: 2, name: "name2", strength: 12 },
      { id: 3, name: "name3", strength: 7 },
    ];
    mockHeroService = jasmine.createSpyObj([
      "getHeros",
      "addHero",
      "deleteHero",
    ]);
    component = new HeroesComponent(mockHeroService);
  });

  describe("delete", () => {
    it("should remove the indicated hero fromthe heros list", () => {
      // make the mock method return a observable objectr
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROS;
      component.delete(HEROS[2]);
      expect(component.heroes.length).toBe(2);
    });

    it("should call deleteHero", () => {
      // make the mock method return a observable objectr
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROS;
      component.delete(HEROS[2]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROS[2]);
    });
  });
});
