import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";

describe("HeroComponent (shallow tests)", () => {
  let fixture: ComponentFixture<HeroComponent>; // wrapper for component

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [HeroComponent] });

    fixture = TestBed.createComponent(HeroComponent);
  });

  it("should have the correct hero", () => {
    fixture.componentInstance.hero = { id: 1, name: "name1", strength: 80 };

    expect(fixture.componentInstance.hero.name).toEqual("name1");
  });
});
