import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MADLandingComponent } from "./madlanding.component";

describe("MADLandingComponent", () => {
  let component: MADLandingComponent;
  let fixture: ComponentFixture<MADLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MADLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MADLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
