import { Injectable, ViewContainerRef } from "@angular/core";
import { LANDING_PAGE_LAYOUT_CONFIGURATION_MAP } from "../../app.constants";

@Injectable({ providedIn: "root" })
export class DynamicComponentService {
  public constructor() {}

  public createComponent(
    container: ViewContainerRef,
    landingPageLayoutId?: string,
    landingPageLayoutType?: string
  ): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      container.clear();
      const landingPageLayoutConfig =
        await this.randomlySelectLandingPageLayoutConfiguration(
          landingPageLayoutId,
          landingPageLayoutType
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
    landingPageLayoutId: string,
    landingPageLayoutType: string
  ) {
    const landingPageLayoutDefaultConfiguration =
      LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.get(`default`);
    const landingPageLayoutConfiguration =
      LANDING_PAGE_LAYOUT_CONFIGURATION_MAP.get(landingPageLayoutId);
    const landingPageLayoutConfig =
      landingPageLayoutConfiguration == null
        ? landingPageLayoutDefaultConfiguration
        : landingPageLayoutConfiguration;
    let landingPageLayoutRandomIndex;
    if (landingPageLayoutType == "left") {
      landingPageLayoutRandomIndex = 0;
    } else if (landingPageLayoutType == "right") {
      landingPageLayoutRandomIndex = 1;
    } else if (landingPageLayoutType == "bottom") {
      landingPageLayoutRandomIndex = 2;
    } else {
      landingPageLayoutRandomIndex = Math.floor(
        Math.random() * (landingPageLayoutConfig.length - 0) + 0
      );
    }
    return landingPageLayoutConfig[landingPageLayoutRandomIndex];
  }
}
