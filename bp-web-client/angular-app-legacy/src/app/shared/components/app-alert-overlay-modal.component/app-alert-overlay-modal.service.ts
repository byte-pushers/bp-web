import { Injectable } from "@angular/core";
import { Overlay, OverlayConfig } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import {
  AppAlertOverlayModalConfig,
  AppAlertOverlayModalRef,
} from "./app-alert-overlay-modal-ref";
/*import * as Object from 'bytepushers-js-obj-extensions';*/
import { BehaviorSubject, Observable } from "rxjs";
import { ComponentType } from "@angular/cdk/portal";

@Injectable({
  providedIn: "root",
})
export class AppAlertOverlayModalService {
  private dialogRef: AppAlertOverlayModalRef;
  private messageBehaviorSubject: BehaviorSubject<string> = <
    BehaviorSubject<string>
  >new BehaviorSubject(null);

  // Inject overlay service
  constructor(private overlay: Overlay) {}

  private getOverlayConfig(config: AppAlertOverlayModalConfig): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    /* Muted references to bytepushers modules in order to bypass error, it is somehow conflicting with the .length and in turn affecting the router.*/

    const overlayConfig = null; /*new OverlayConfig({
      hasBackdrop: (Object.isDefinedAndNotNull(config) && Object.isDefinedAndNotNull(config.hasBackdrop)) ? config.hasBackdrop : true,
      // tslint:disable-next-line:max-line-length
      backdropClass: (Object.isDefinedAndNotNull(config) && Object.isDefinedAndNotNull(config.backdropClass)) ? config.backdropClass : 'dark-backdrop',
      panelClass: (Object.isDefinedAndNotNull(config) && Object.isDefinedAndNotNull(config.panelClass)) ? config.panelClass : 'tm-file-preview-dialog-panel',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: positionStrategy
    });*/

    return overlayConfig;
  }

  private createOverlay(config: AppAlertOverlayModalConfig) {
    // Returns an OverlayConfig
    const overlayConfig = this.getOverlayConfig(config);

    // Returns an OverlayRef
    return this.overlay.create(overlayConfig);
  }

  open(
    component: ComponentType<any>,
    overlayConfig: AppAlertOverlayModalConfig = null
  ): AppAlertOverlayModalRef {
    const overlayRef = this.createOverlay(overlayConfig);

    // Create ComponentPortal that can be attached to a PortalHost
    const filePreviewPortal = new ComponentPortal(component);

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(filePreviewPortal);

    this.dialogRef = new AppAlertOverlayModalRef(overlayRef);

    return this.dialogRef;
  }

  close(): void {
    this.dialogRef.close();
  }

  public setMessage(msg: string): void {
    this.messageBehaviorSubject.next(msg);
  }

  public message(): Observable<string> {
    return this.messageBehaviorSubject.asObservable();
  }
}
