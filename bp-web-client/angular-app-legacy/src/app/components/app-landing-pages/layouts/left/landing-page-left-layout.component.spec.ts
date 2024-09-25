import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LandingPageLeftLayoutComponent } from "./landing-page-left-layout.component";

describe("LeftComponent", () => {
  let component: LandingPageLeftLayoutComponent;
  let fixture: ComponentFixture<LandingPageLeftLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageLeftLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageLeftLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
