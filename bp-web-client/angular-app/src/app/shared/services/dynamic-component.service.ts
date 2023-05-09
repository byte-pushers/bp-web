import { Injectable, ViewContainerRef } from "@angular/core";
import { LANDING_PAGE_LAYOUT_CONFIGURATION_MAP } from "../../app.constants";

@Injectable({ providedIn: "root" })
export class DynamicComponentService {
  public constructor() {}

  public createComponent(
    container: ViewContainerRef,
    landingPageLayoutId?: string
  ): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      container.clear();
      const landingPageLayoutConfig =
        await this.randomlySelectLandingPageLayoutConfiguration(
          landingPageLayoutId
        );
      const componentRef = container.createComponent(
        await landingPageLayoutConfig?.createComponent()
      );

      Object.entries(landingPageLayoutConfig?.inputs).forEach(
        ([key, value]) => {
          componentRef.setInput(key, value);
        }
      );

      resolve(true);
    });
  }

  private async randomlySelectLandingPageLayoutConfiguration(
    landingPageLayoutId: string
  ) {
    const landingPageLayoutDefaultConfiguration =
      LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.get(`default`);
    const landingPageLayoutConfiguration =
      LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.get(landingPageLayoutId);
    const landingPageLayoutConfig =
      landingPageLayoutConfiguration == null
        ? landingPageLayoutDefaultConfiguration
        : landingPageLayoutConfiguration;
    const landingPageLayoutRandomIndex = Math.floor(
      Math.random() * (landingPageLayoutConfig.length - 0) + 0
    );

    return landingPageLayoutConfig[landingPageLayoutRandomIndex];
  }
}
