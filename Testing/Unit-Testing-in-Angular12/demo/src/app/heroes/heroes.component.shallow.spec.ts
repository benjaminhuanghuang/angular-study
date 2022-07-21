import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "Rxjs";
//
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";

describe("HerosComponent (shallow tests)", () => {
  let fixture: ComponentFixture<HeroesComponent>; // wrapper for component
  let mockHeroService;
  let HEROES;

  // Mock child component
  @Component({
    selector: "app-hero",
    template: "<div></div>",
  })
  class FakeHeroComponent {
    @Input() hero: Hero;
  }

  beforeEach(() => {
    HEROES = [
      { id: 1, name: "name1", strength: 8 },
      { id: 2, name: "name2", strength: 12 },
      { id: 3, name: "name3", strength: 7 },
    ];
    mockHeroService = jasmine.createSpyObj([
      "getHeroes",
      "addHero",
      "deleteHero",
    ]);
    // tell Angular use the mockHeroService
    TestBed.configureTestingModule({
      declarations: [HeroesComponent, FakeHeroComponent],
      providers: [{ provide: HeroService, useValue: mockHeroService }],
    });

    fixture = TestBed.createComponent(HeroesComponent);
  });

  it("should set heroes correctly from the service", () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
    //
    expect(fixture.componentInstance.heroes.length).toBe(3);
  });

  it("should create li for each hero", () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
    //
    expect(fixture.debugElement.queryAll(By.css("li")).length).toBe(3);
  });
});
