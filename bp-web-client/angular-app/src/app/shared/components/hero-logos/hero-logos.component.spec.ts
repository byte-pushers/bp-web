import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HeroLogosComponent } from "./hero-logos.component";

describe("HeroLogosComponent", () => {
  let component: HeroLogosComponent;
  let fixture: ComponentFixture<HeroLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroLogosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
