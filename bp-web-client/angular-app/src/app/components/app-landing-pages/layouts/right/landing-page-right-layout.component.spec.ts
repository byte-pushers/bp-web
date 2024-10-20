import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LandingPageRightLayoutComponent } from "./landing-page-right-layout.component";

describe("RightComponent", () => {
  let component: LandingPageRightLayoutComponent;
  let fixture: ComponentFixture<LandingPageRightLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageRightLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageRightLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
