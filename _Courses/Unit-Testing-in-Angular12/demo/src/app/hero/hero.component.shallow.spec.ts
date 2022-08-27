import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { By } from "@angular/platform-browser";

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

  it("should render the hero name in an anchor tag", () => {
    fixture.componentInstance.hero = { id: 2, name: "name2", strength: 80 };

    // trigger the rendering
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector("a").textContent).toContain(
      "name2"
    );

    expect(
      fixture.debugElement.query(By.css("a")).nativeElement.textContent
    ).toContain("name2");
  });
});
