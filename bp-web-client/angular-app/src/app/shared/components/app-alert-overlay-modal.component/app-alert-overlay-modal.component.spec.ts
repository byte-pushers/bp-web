import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AppAlertOverlayModalComponent} from "./app-alert-overlay-modal.component";

describe('AppAlertOverlayModal.ComponentComponent', () => {
  let component: AppAlertOverlayModalComponent;
  let fixture: ComponentFixture<AppAlertOverlayModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAlertOverlayModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAlertOverlayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
